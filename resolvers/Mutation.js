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
  updateAProduct: (parent, { input }, { db: { myProducts } }) => {
    const { id, name, description, quantity, price, img, onSale, categoryId } =
      input;
    const updatedProducts = myProducts.filter((product) => {
      if (product.id === id) {
        product.name = name;
        product.description = description;
        product.quantity = quantity;
        product.price = price;
        product.img = img;
        product.onSale = onSale;
        product.categoryId = categoryId;
      }
      return product;
    });
    myProducts = [...updatedProducts];
    return true;
  },
  updateACategory: (parent, { input }, { db: { myCategories } }) => {
    const { id, name } = input;
    const updatedCategory = myCategories.filter((category) => {
      if (category.id === id) {
        category.name = name;
      }
      return category;
    });
    myCategories = [...updatedCategory];
    return true;
  },
};
