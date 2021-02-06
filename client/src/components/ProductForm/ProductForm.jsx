import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductForm = ({ buttonText, handleFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [featured, setFeatured] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/products/${id}`)
        .then((response) => {
          console.log(response.data);
          const {
            title,
            price,
            description,
            imageURL,
            category,
            quantity,
            featured,
          } = response.data;
          setTitle(title);
          setPrice(price);
          setDescription(description);
          setImageURL(imageURL);
          setCategory(category);
          setQuantity(quantity);
          setFeatured(featured);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <>
      <form
        className="col s12"
        onSubmit={(e) => {
          handleFormSubmit(
            e,
            {
              title,
              price,
              description,
              imageURL,
              category,
              quantity,
              featured,
            },
            id
          );
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Product Title"
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="title">Product Title</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Product Price"
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label htmlFor="price">Product Price</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Description"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="description">Product Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Image"
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">Product Image</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Category"
              id="category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label htmlFor="category">Product Category</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Product Quantity"
              id="quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <label htmlFor="quantity">Product Quantity</label>
          </div>
          <div className="input-field col s6">
            <label>
              <input
                type="checkbox"
                checked={featured}
                onChange={() => {
                  setFeatured(!featured);
                }}
              />
              <span>Featured?</span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn">
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
