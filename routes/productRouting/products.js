const router = require("express").Router();
const { getProducts } = require("../../controllers/products/products");

router.route("/products").get(getProducts);

module.exports = router;
