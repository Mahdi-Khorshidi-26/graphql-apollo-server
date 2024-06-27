exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    const category = db.myCategories.filter(
      (category) => category.id === categoryId
    );
    if (!category) return;
    return category;
  },
};
