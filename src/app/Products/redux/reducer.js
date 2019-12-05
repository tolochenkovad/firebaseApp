import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCTS_FAILED,
  SET_PRODUCTS_REQUEST,
  SET_PRODUCTS_SUCCESS,
} from "./types";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productListReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SET_PRODUCTS_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case SET_PRODUCTS_FAILED:
    case DELETE_PRODUCT_FAILED:
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default productListReducer;
