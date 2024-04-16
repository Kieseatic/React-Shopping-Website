import React, { useEffect, useState } from "react";
import Link from "next/link";

import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useCart } from "./cartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    fetchAndDisplayProduct();
  }, []);

  const fetchAndDisplayProduct = () => {
    var apiEndpoint = "https://fakestoreapi.com/products";

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <Layout logo="my-app/logo.jpg" cartItemCount={cartItems.length}>
      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Our Products</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">User ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Image</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="product-table-body">
                {products.map((product) => (
                  <tr key={product.id} data-product-id={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>
                      <img
                        src={product.image}
                        alt="Product Image"
                        className="product-image"
                      />
                    </td>
                    <td>{product.rating.rate}</td>
                    <td>
                      <button type="button" onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
