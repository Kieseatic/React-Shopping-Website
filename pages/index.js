import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useCart } from './cart/cartContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { addToCart, cartItems } = useCart(); 

  useEffect(() => {
    fetchAndDisplayProduct();
  }, []);

  const fetchAndDisplayProduct = () => {
    var apiEndpoint = 'https://fakestoreapi.com/products';

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <Layout logo="my-app/logo.jpg" cartItemCount={cartItems.length}>
      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
              {products.map((product) => (
                <div className="col-md-6 mb-4" key={product.id}>
                  <div className="card h-100">
                    <img
                      src={product.image}
                      alt="Product Image"
                      className="card-img-top product-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">Price: ${product.price}</p>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">Category: {product.category}</p>
                      <p className="card-text">Rating: {product.rating.rate}</p>
                      <button
                        type="button"
                        className="btn btn-primary add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-image {
          max-width: 30%;
          height: 250px;
        }

        .card {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          height: 30%;
          
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card-title {
          font-size: 1rem;
          font-weight: bold;
        }

        .card-text {
          margin-bottom: 5px;
          font-size: 0.9rem;
        }

        .add-to-cart-btn {
          width: 100%;
          font-size: 0.8rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
