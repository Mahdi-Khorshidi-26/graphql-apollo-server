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
    const newProducts = db.myProducts.map((product) => {
      if (product.categoryId === id) {
        return {
          ...product,
          categoryId: null,
        };
      } else return product;
    });
    if (!newCategories) return false;
    db.myCategories = [...newCategories];
    db.myProducts = [...newProducts];
    return true;
  },
  deleteAProduct: (parent, { id }, { db }) => {
    const newProducts = db.myProducts.filter((product) => product.id !== id);
    if (!newProducts) return false;
    db.myProducts = [...newProducts];
    return true;
  },
  updateAProduct: (parent, { id, input }, { db: { myProducts } }) => {
    const { name, description, quantity, price, img, onSale, categoryId } =
      input;
    const index = myProducts.findIndex((product) => product.id === id);
    myProducts[index] = {
      ...myProducts[index],
      ...input,
    };
    return myProducts[index];
  },
  updateACategory: (parent, { id, input }, { db: { myCategories } }) => {
    const index = myCategories.findIndex((category) => category.id === id);
    console.log(input.name);
    myCategories[index] = {
      ...myCategories[index],
      ...input,
    };
    console.log(myCategories[index]);
    return myCategories[index];
  },
};
