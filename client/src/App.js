import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./containers/About/About";
import Admin from "./containers/Admin/Admin";
import Contact from "./containers/Contact/Contact";
import EditProduct from "./containers/EditProduct/EditProduct";
import Home from "./containers/Home/Home";
import NewProduct from "./containers/NewProduct/NewProduct";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import Products from "./containers/Products/Products";
import AlertContext from "./utils/alertContext";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });

  return (
    <div>
      <Router>
        <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
          <NavBar />
          <div className="row">
            <div className="col s12 alert">
              <p className="center-align">{alert.message}</p>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/new-product" component={NewProduct} />
            <Route exact path="/admin/:id" component={EditProduct} />
          </Switch>
        </AlertContext.Provider>
      </Router>
    </div>
  );
}

export default App;
