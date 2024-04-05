// pages/cart.js
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { useCart } from './cartContext';


const Cart = () => {
  const { cartItems } = useCart()

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Layout logo="my-app/logo.jpg" cartItemCount={cartItems.length}>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Shopping Cart</h2>
       

        <div className="text-end">
          <strong>Total Amount:</strong> ${calculateTotalAmount()}
        </div>

      </div>
    </Layout>
  );
};

export default Cart;
