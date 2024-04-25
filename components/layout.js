import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../pages/cart/cartContext';

const Layout = ({ children }) => {
  const router = useRouter();
  const { cartItems, cartItemCount, clearCart } = useCart();

  // Check if the current route is the cart page
  const isCartPage = router.pathname === '/cart';

  // Handle clearing the cart
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <header>
        <div className="header-container">
          <h1>
            <Link href="/" class="title"> The Bulky Store </Link> | 
          </h1>
          <nav>
            <Link href="/"> Home</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> | 
            <span className="shopping-links">
           <Link href="/cart"> Shopping Cart ({cartItemCount})</Link>
            </span>
          </nav>
          <span className="login-button">
            <Link href="/login">
              <button>Login</button>
            </Link>
          </span>
        </div>
      </header>
      <hr />
      <main>
        <div className="container">{children}</div>
        {/* Conditionally render cart layout only on the cart page */}
        {isCartPage && (
          <div className="cart-container">
            <h2>Cart Items</h2>
            {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img
                      src={item.image}  
                      alt={item.title}
                      className="product-image"
                    />
                    <div className="item-details">
                      <div>
                        {item.title} - ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="clear-cart-button-container">
                <button onClick={handleClearCart} className="clear-cart-button">Clear Cart</button>
              </div>
            </>
          ) : ( 
            <p>Your cart is empty.</p>
          )}
          </div>
        )}
      </main>
      <br />
      <style jsx>{`
        header {
          background-color: #f8f9fa;
          padding: 10px 0;
        }
        
        .header-container {
          display: flex;
          justify-content: flex-start; /* Align to the left */
          align-items: center;
          padding: 0 20px;
        }
        
        .login-button {
          margin-left: auto; /* Align to the right */
        }
        
        .login-button button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        

        .login-button button:hover {
          background-color: #0056b3;
        }

        .container {
          padding: 20px;
        }
        
        .cart-container {
          text-align: center;
        }

        .clear-cart-button-container {
          margin-top: 20px; /* Adjust the top margin as needed */
        }

        .clear-cart-button {
          background-color: #dc3545; /* Red color */
          color: #fff; /* White text color */
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .clear-cart-button:hover {
          background-color: #c82333; /* Darker shade of red on hover */
        }

        .cart-item {
          list-style-type: none;
          padding: 10px;
          border-bottom: 1px solid #ccc; /* Add border bottom for separation */
          display: flex; /* Use flexbox for better alignment */
          align-items: center; /* Align items vertically */
        }

        .product-image {
          max-width: 100px;
          max-height: 100px;
          margin_left: 100px;
        }

        .item-details {
          flex: 1; /* Take up remaining space */
          margin-left: 20px; /* Adjust margin as needed for spacing */
        }
      `}</style>
    </>
  );
};

export default Layout;
