import React from 'react';
import Link from 'next/link';
import { useCart } from '../pages/cartContext'; 

const Layout = ({ children }) => {
  const { cartItems, cartItemCount, clearCart } = useCart();  

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <header>
        <div className="header-container">
          <h1>
            <Link href="/"> The Bulky Store</Link>
          </h1>
          <nav>
            <Link href="/">| Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> | 
            <span className="dashboard-links">
              <Link href="/dashboard">Dashboard</Link> | <Link href="/dashboard/preferences">Preferences</Link>
            </span> |
            <span className="shopping-links">
              <Link href="/products">Products</Link> | <Link href="/cart">Shopping Cart ({cartItemCount})</Link>
            </span>
          </nav>
          <span className="login-link">
            <Link href="/login">Login</Link>
          </span>
        </div>
      </header>
      <hr />
      <main>
        <div className="container">
          {children}
        </div>
        {/* Display cart items */}
        <div>
          <h2>Cart Items</h2>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <div>
                      {item.title} - ${item.price.toFixed(2)}
                    </div>
                    <img
                      src={item.image}  
                      alt={item.title}
                      style={{ maxWidth: '100px', maxHeight: '100px' }}  
                    />
                  </li>
                ))}
              </ul>
              <button onClick={handleClearCart}>Clear Cart</button>
            </>
          ) : ( 
            <p>Your cart is empty.</p>
          )}
        </div>
      </main>
      <br />
      <style jsx>{`
        header {
          background-color: #f8f9fa;
          padding: 10px 0;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
        
        .login-link {
          margin-left: auto;
        }
      `}</style>
    </>
  );
};

export default Layout;
