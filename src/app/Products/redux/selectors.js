export const getNewProductData = state => {
  if (state.form.addProduct === undefined) {
    return {};
  } else return state.form.addProduct.values;
};

export const getProductsFirestore = state => state.products.products;

export const getLoadingProducts = state => state.products.loading;
