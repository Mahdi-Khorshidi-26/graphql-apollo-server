exports.Category = {
  products: ({ id }, args, { db }) => {
    const products = db.myProducts.filter(
      (product) => product.categoryId === id
    );
    if (!products) return;
    return products;
  },
};
