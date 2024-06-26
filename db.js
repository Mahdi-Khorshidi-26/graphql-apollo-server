const myProducts = [
  {
    id: "1",
    name: "iphone 14",
    description: "apple product",
    quantity: 17,
    price: 122.32,
    onSale: false,
    img: "1.png",
    categoryId: "2",
  },
  {
    id: "2",
    name: "iphone 11",
    description: "apple product",
    quantity: 37,
    price: 52.32,
    onSale: true,
    img: "2.png",
    categoryId: "3",
  },
  {
    id: "3",
    name: "iphone 12",
    description: "apple product",
    quantity: 27,
    price: 12.32,
    onSale: true,
    img: "3.png",
    categoryId: "1",
  },
];
const myCategories = [
  {
    id: "1",
    name: "phone",
  },
  {
    id: "2",
    name: "mobile",
  },
  {
    id: "3",
    name: "telephone",
  },
];

module.exports = {
  myProducts,
  myCategories,
};
