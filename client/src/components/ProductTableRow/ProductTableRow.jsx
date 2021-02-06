import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const ProductTableRow = ({
  _id,
  title,
  description,
  price,
  imageURL,
  category,
  quantity,
  featured,
  getProducts,
}) => {
  const deleteProduct = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        getProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProduct = (id, featured) => {
    axios
      .put(`/api/products/${id}`, { featured: !featured })
      .then((response) => {
        console.log(response.data);
        getProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>
        <img src={imageURL} alt={title} style={{ height: "3em" }}></img>
      </td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>
        <FontAwesomeIcon
          icon={featured ? faStar : faStarOutline}
          onClick={() => {
            editProduct(_id, featured);
          }}
        />
      </td>
      <td>
        {/* TODO: Open an edit form with values pre-populated */}
        <FontAwesomeIcon icon={faEdit} />
      </td>
      <td>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            deleteProduct(_id);
          }}
        />
      </td>
    </tr>
  );
};

ProductTableRow.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  imageURL: PropTypes.string,
  category: PropTypes.string,
  quantity: PropTypes.number,
  featured: PropTypes.bool,
  getProducts: PropTypes.func.isRequired,
};

export default ProductTableRow;
