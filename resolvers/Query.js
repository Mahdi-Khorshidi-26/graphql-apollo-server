exports.Query = {
  products: (parent, args, { myProducts }) => {
    return myProducts;
  },
  categories: (parent, args, { myCategories }) => {
    return myCategories;
  },
  category: (parent, { id }, { myCategories }) => {
    const category = myCategories.filter((category) => category.id == id);
    if (!category) return;
    return category;
  },
  product: (parent, { id }, { myProducts }) => {
    const product = myProducts.filter((product) => product.id === id);
    if (!product) return;
    return product;
  },
};
