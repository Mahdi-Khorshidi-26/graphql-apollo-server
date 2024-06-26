exports.Category = {
  products: ({ id }, args, { myProducts }) => {
    const products = myProducts.filter((product) => product.categoryId === id);
    if (!products) return;
    return products;
  },
};
