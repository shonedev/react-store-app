import React from "react";
import "./App.scss";
import data from "./data";
import Seo from "./seo";
import Product from "./components/product";

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
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className='row row__center'>All Rights Reserved</footer>
    </div>
  );
}

export default App;
