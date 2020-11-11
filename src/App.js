import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
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
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/product/:id' component={ProductPage}></Route>
        </main>
        <footer className='row row__center'>All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
