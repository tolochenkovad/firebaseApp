import { takeLatest, put, call, select } from "redux-saga/effects";
import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from "./types";
import { getDataFirestore } from "../../../api/firebase/getDataFirestore";
import { POSTFIX } from "../../../constans/constans";
import { getNewProductData } from "./selectors";
import { getFirestore } from "redux-firestore";
import { toastr } from "react-redux-toastr";

function* setProducts() {
  yield put({
    type: SET_PRODUCTS + POSTFIX.START,
  });
  try {
    const snapShot = yield call(() => getDataFirestore("productsCloud"));
    const allProducts = snapShot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    yield put({
      type: SET_PRODUCTS + POSTFIX.SUCCESSFUL,
      payload: allProducts,
    });
  } catch (error) {
    yield call(() => toastr.error(error.message));
    yield put({
      type: SET_PRODUCTS + POSTFIX.FAILURE,
      error: error.message,
    });
  }
}

function* deleteProduct({ payload }) {
  yield put({
    type: DELETE_PRODUCT + POSTFIX.START,
  });
  try {
    const firestoreData = getFirestore();
    yield call([
      firestoreData.collection("productsCloud").doc(payload),
      "delete",
    ]);
    yield call(() => toastr.success("Successfully removed"));
    yield put({
      type: SET_PRODUCTS,
    });
  } catch (error) {
    yield call(() => toastr.error(error.message));
    yield put({
      type: DELETE_PRODUCT + POSTFIX.FAILURE,
      error: error.message,
    });
  }
}

function* addProduct() {
  yield put({
    type: ADD_PRODUCT + POSTFIX.START,
  });
  try {
    const firestoreData = getFirestore();
    const productFormData = yield select(getNewProductData);
    const newProduct = {
      img: productFormData.img,
      title: productFormData.title,
      description: productFormData.description,
      date: productFormData.date,
      price: productFormData.price,
      location: productFormData.location,
    };
    yield call([firestoreData.collection("productsCloud"), "add"], {
      ...newProduct,
    });
    yield call(() => toastr.success("Successfully added"));
    yield put({
      type: SET_PRODUCTS,
    });
  } catch (error) {
    yield call(() => toastr.error(error.message));
    yield put({
      type: ADD_PRODUCT + POSTFIX.FAILURE,
      error: error.message,
    });
  }
}

function* productsSaga() {
  yield takeLatest(SET_PRODUCTS, setProducts);
  yield takeLatest(DELETE_PRODUCT, deleteProduct);
  yield takeLatest(ADD_PRODUCT, addProduct);
}

export default productsSaga;
