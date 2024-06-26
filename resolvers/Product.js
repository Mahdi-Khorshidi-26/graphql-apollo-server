exports.Product = {
  category: ({ categoryId }, args, { myCategories }) => {
    const category = myCategories.filter(
      (category) => category.id === categoryId
    );
    if (!category) return;
    return category;
  },
};
