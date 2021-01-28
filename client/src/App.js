import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./containers/About/About";
import Admin from "./containers/Admin/Admin";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import NewProduct from "./containers/NewProduct/NewProduct";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import Products from "./containers/Products/Products";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/new-product" component={NewProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
