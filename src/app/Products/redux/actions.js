import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from "./types";

export const setProductsAction = () => ({
  type: SET_PRODUCTS,
});

export const deleteProductAction = id => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const addProductAction = () => ({
  type: ADD_PRODUCT,
});
