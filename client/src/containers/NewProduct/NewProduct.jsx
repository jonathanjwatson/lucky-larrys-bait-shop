import React from "react";
import axios from "axios";
import ProductForm from "../../components/ProductForm/ProductForm";

const NewProduct = () => {
  const handleFormSubmit = (e, productData) => {
    e.preventDefault();
    axios
      .post("/api/products", productData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Add a New Product</h1>
        </div>
      </div>
      <div className="row">
        <ProductForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default NewProduct;
