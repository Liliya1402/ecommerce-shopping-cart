import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>React Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
              
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;