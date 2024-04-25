// pages/_app.js
import React from 'react';
import "@/styles/globals.css"

import { CartProvider } from './cart/cartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;