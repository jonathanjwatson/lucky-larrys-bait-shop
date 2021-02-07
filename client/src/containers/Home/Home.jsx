import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/LuckyLarrysBaitShop.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import AlertContext from "../../utils/alertContext";

const Home = () => {
  //1. Hardcode values in the render
  //2. Move the data to state (still hard coded)
  //3. Make an API call to get real data, set it on state.

  // TO USE STATE
  // 1. Import the useState hook from React
  // 2. Create a const to hold state and add default values

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const alert = useContext(AlertContext);

  useEffect(() => {
    axios
      .get("/api/products/featured")
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert.setAlert({
          message: "No featured products found!",
          type: "danger",
        });
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <img src={Logo} alt="Logo" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="row">
        {featuredProducts.map((product) => (
          <ProductCard {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

// {
//     "featured": true,
//     "_id": "601eed28d699da24be7ed79b",
//     "title": "Stink Bait",
//     "price": 1.99,
//     "description": "Strong Stuff",
//     "imageURL": "https://fishaz.azgfd.com/wp-content/uploads/2019/05/stinkbait.jpg",
//     "category": "Fishing",
//     "quantity": 100,
//     "__v": 0
// }
