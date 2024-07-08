import React from 'react';
import '../css/Cart.css';
import chair from '../images/item1.jpg'

export const Cart = () => {
  return (
    <div className="cart-container">
      <main className="cart-main">
        <div className="product-image">
          <img src={chair} alt="Comfy Work Table and a chair" />
          <div className="price-tag">$50.00</div>
          <div className="product-title">Comfy Work Table and a chair</div>
        </div>
        <div className="order-summary">
          <div className="discount-code">
            <input type="text" placeholder="Discount" />
            <button>Add code</button>
          </div>
          <div className="summary-details">
            <h3>Order Summary</h3>
            <div className='order'>
                <p>Order</p>
                <p>$50.00</p>
            </div>
            <div className='delivery'>
                <p>Delivery</p>
                <p>$10.00</p>
            </div>
            <div className='total'>
                <p>Total</p>
                <p>$60.00</p>
            </div>
            <button className="proceed-btn">Proceed</button>
          </div>
        </div>
      </main>
    </div>
  );
};
