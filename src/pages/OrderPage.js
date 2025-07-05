// src/pages/OrderPage.js
import React from 'react';
import API from '../api';

export default function OrderPage() {
  const handleOrder = async () => {
    try {
      const orderData = {
        items: [{ name: 'Scented Candle', quantity: 2, price: 180 }],
        totalPrice: 360,
        email: 'grace@example.com',
      };

      const res = await API.post('/order', orderData);
      alert('✅ Order placed successfully!');
    } catch (err) {
      console.error(err);
      alert('❌ Order failed. Please log in first.');
    }
  };

  return (
    <div className="container py-5">
      <h2>Place Your Order</h2>
      <button onClick={handleOrder} className="btn btn-primary">
        Submit Order
      </button>
    </div>
  );
}
