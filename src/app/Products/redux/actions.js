import {
  ADD_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  SET_PRODUCTS_REQUEST,
} from "./types";

export const setProductsAction = () => ({
  type: SET_PRODUCTS_REQUEST,
});

export const deleteProductAction = id => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});

export const addProductAction = () => ({
  type: ADD_PRODUCT_REQUEST,
});
