import React from "react";
import Seo from "../seo";
import data from "../data";
import Product from "../components/product";

export default function ProductPage() {
  return (
    <>
      <Seo title='Welcome To Our Site' />
      <div className='row row__center'>
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </>
  );
}
