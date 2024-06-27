exports.Query = {
  products: (parent, args, { db }) => {
    return db.myProducts;
  },
  categories: (parent, args, { db }) => {
    return db.myCategories;
  },
  category: (parent, { id }, { db }) => {
    const category = db.myCategories.filter((category) => category.id == id);
    if (!category) return;
    return category;
  },
  product: (parent, { id }, { db }) => {
    const product = db.myProducts.filter((product) => product.id === id);
    if (!product) return;
    return product;
  },
};
