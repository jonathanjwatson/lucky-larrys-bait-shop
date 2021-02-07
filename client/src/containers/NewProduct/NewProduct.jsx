import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";
import AlertContext from "../../utils/alertContext";

const NewProduct = () => {
  const alert = useContext(AlertContext);
  const history = useHistory();

  const handleFormSubmit = (e, productData) => {
    e.preventDefault();
    axios
      .post("/api/products2", productData)
      .then((response) => {
        console.log(response.data);
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
        alert.setAlert({
          message: "Failed to create new product.",
          type: "danger",
        });
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
        <ProductForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Create New Product"
        />
      </div>
    </div>
  );
};

export default NewProduct;
