import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "react-bootstrap";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal";

import ProductList from "./components/ProductList";
import Aboutus from "./components/AboutUs";
import Stores from "./components/Stores";
import Sales from "./components/SellExchange";
import contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/store" component={Stores} />
        <Route exact path="/exchange" component={Sales} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
