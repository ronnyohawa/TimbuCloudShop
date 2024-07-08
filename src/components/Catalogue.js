import React from 'react';
import '../css/Product.css';
import office from '../images/item1.jpg'

export const Product = () => {
  return (
    <div className="product-container">
      <main className="product-main">
        <div className="product-card">
          <img src={office} alt="Office Setup" />
          <div className="price-tag">$500.00</div>
        </div>
        <div className="product-description">
          <h2>Description</h2>
          <p>
            A comfy working table and chair. Specially designed for use in an office setting.
            Convenient as an office space for individual and helps keep the workspace organized and efficient.
          </p>
          <button>Add to cart</button>
        </div>
      </main>
    </div>
  );
};