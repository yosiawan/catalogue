import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router";
import { rootStore } from "./store";

import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarComponent from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import "./index.css";

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={rootStore}>
    <Router history={history}>
      <NavbarComponent>
        <Route exact path="/" component={Home}/>
        <Route path="/product/:id" component={ProductDetails}/>
        <Route path="/dashboard" component={Dashboard}/>
      </NavbarComponent>
    </Router>
  </Provider>,
document.getElementById('root'));
