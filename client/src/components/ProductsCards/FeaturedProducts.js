import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.css";
const axios = require('axios');

const FeaturedProducts = () => {

  const [products , setProducts] = useState(null);
  
  useEffect(()=>{
  
    const fetchData = async (url) => {
      await axios
        .get(url)
        .then((responce) => {
          if(responce.data.length>0){

            setProducts(responce.data)
          }
          console.log(responce.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData("http://127.0.0.1:5000/products/featured");
  },[])
  
  return (
    <>
    
      {!products ? (
        <div className="featured_image">
          <div className="heading">Featured Section</div>
          <img src="/featured.gif" alt="Featured" />
        </div>
      ) : (
        <div className="main_container">
          <div className="heading">Featured Section</div>
          <main className="main_grid">
            {products.map((items) => {
              return (
                <article key={items._id}>
                  <span>Featured</span>
                  <img
                    src={items.imageLink[0].link}
                    alt="img"
                  />
                  <div className="main_text">
                    <strong>{items.title}</strong>
                    <h3>₹{items.price}</h3>
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
}

export default FeaturedProducts