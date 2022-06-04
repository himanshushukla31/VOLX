const express = require('express');
const app =express();
const cors = require('cors');
const bodyparser = require('body-parser');
const connectDB = require('./db');

require("dotenv").config({ path: "./.env" });


app.use(cors());     //For Cross Origin Request acceptance :)
app.use(
  express.json({
    extended: false,
  })
);  // Can take json format


connectDB(); //Connecting DB

app.use("/products", require("./routes/productRouting/products"));

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend Fired ---->🔥🔥🔥");
})