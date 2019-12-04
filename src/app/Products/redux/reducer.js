import { ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from "./types";
import { POSTFIX } from "../../../constans/constans";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS + POSTFIX.START:
    case DELETE_PRODUCT + POSTFIX.START:
    case ADD_PRODUCT + POSTFIX.START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_PRODUCTS + POSTFIX.SUCCESSFUL:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case SET_PRODUCTS + POSTFIX.FAILURE:
    case DELETE_PRODUCT + POSTFIX.FAILURE:
    case ADD_PRODUCT + POSTFIX.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productListReducer;
