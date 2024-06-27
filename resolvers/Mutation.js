const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.myCategories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, img, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      img,
      onSale,
      categoryId,
    };
    db.myProducts.push(newProduct);
    return newProduct;
  },
  deleteACategory: (parent, { id }, { db }) => {
    const newCategories = db.myCategories.filter(
      (category) => category.id !== id
    );
    if (!newCategories) return false;
    db.myCategories = [...newCategories];
    return true;
  },
  deleteAProduct: (parent, { id }, { db }) => {
    const newProducts = db.myProducts.filter((product) => product.id !== id);
    if (!newProducts) return false;
    db.myProducts = [...newProducts];
    return true;
  },
};
