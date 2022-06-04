import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";
const axios = require("axios");

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async (url) => {
      await axios
        .get(url)
        .then((response) => {
          const normalProducts = response.data.filter(
            (product) => !product.isFeatured
          );
          setProducts(normalProducts);
          console.log(normalProducts);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData("/products/products");
  }, []);

  return (
    <>
      {!products ? (
        "No products No products"
      ) : (
        <div className="container">
          <div className="heading">Products Section</div>
          <main className="grid">
            {products.map((items) => {
              return (
                <article key={items._id}>
                  <img src={items.imageLink[0].link} alt="Sample photo" />
                  <div className="text">
                    <h3>{items.title}</h3>
                    <strong>₹{items.price}</strong>
                    <p>{items.about}</p>
                    <a
                      href="https://codepen.io/collection/XdWJOQ/"
                      className="btn btn-primary btn-block"
                    >
                      Contact Seller
                    </a>
                  </div>
                </article>
              );
            })}
          </main>
        </div>
      )}
    </>
  );
};

export default Products;
