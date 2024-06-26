const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (parent, { input }, { myCategories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    myCategories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { myProducts }) => {
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
    myProducts.push(newProduct);
    return newProduct;
  },
};
