import React from "react";
import Home from "./home/Home";
import Cart from "../common/cart/Cart";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ParkourStore from "./parkourStore/ParkourStore";
import ProductPage from "./productPage/ProductPage";
import Checkout from "./checkout/Checkout";

App.propTypes = {};

function App(props) {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Cart />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/parkour-store" component={ParkourStore} />
          <Route path="/products" component={ProductPage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
