const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  about: { type: String, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  imageLink: [
    {
      link: { type: String, required: true },
    },
  ],
  isFeatured: { type: Boolean, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("products", productSchema);
