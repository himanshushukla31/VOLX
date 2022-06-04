const featuredProducts = require("../../models/featuredProducts");
const products = require("../../models/products");

exports.getProducts = async (req, res, next) => {
  await products
    .find({}) // Find All Products
    .then((results) => {
      console.log("Bhai Normal Products manga aur mai bhej diya!");
      return res.json(results);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getFeaturedProducts = async (req, res, next) => {
  await featuredProducts
    .find({}) // Find All Products
    .then((results) => {
      console.log("Bhai Featured Products manga aur mai bhej diya!");
      return res.json(results);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
