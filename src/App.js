import React from "react";
import "./App.scss";
import data from "./data";
import Seo from "./seo";

function App() {
  return (
    <div className='grid-container'>
      <Seo title='Welcome to our Site' />
      <header className='row'>
        <div>
          <a href='/' className='brand'>
            Store
          </a>
        </div>
        <div>
          <a href='/cart'>Cart</a>
          <a href='/signin'>Sign in</a>
        </div>
      </header>

      <main>
        <div className='row row__center'>
          {data.products.map((product) => (
            <div key={product._id} className='card'>
              <a href={`/product/${product._id}`}>
                <img
                  className='img img__medium'
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className='card__body'>
                <a href={`/product/${product._id}`}>
                  <h2 className='card__title'>{product.name}</h2>
                </a>
                <div className='card__rating'>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                </div>
                <div className='card__price'>&euro;{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className='row row__center'>All Rights Reserved</footer>
    </div>
  );
}

export default App;
