const router = require("express").Router();
const {
  getProducts,
  getFeaturedProducts,
} = require("../../controllers/products/products");

router.route("/products").get(getProducts);
router.route("/featured").get(getFeaturedProducts);

module.exports = router;
