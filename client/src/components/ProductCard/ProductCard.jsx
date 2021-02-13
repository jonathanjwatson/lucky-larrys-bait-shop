import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ title, price, imageURL, description, _id }) => {
  const requestPickup = () => {
    axios
      .post("/api/sms/order", {
        phone: "888-888-8888",
        product: title,
      })
      .then((response) => {
        alert("Lucky Larry's has been contacted about your pickup request!");
      })
      .catch((err) => {
        alert("There was an error requesting your pickup. ");
      });
  };

  return (
    <div className="col s4">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={imageURL} alt={title} />
              <span className="card-title">
                {title} - ${price}
              </span>
            </div>
            <div className="card-content">
              <p>{description}</p>
            </div>
            <div className="card-action">
              <Link to={`/products/${_id}`}>Learn More</Link>
              <button
                className="waves-effect waves-light btn"
                onClick={requestPickup}
              >
                Request Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  description: PropTypes.string,
  _id: PropTypes.string.isRequired,
};

export default ProductCard;
