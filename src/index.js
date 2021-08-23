import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./pages/App";
import InsertCurrency from "./pages/InsertCurrency";
import GetCurrency from "./pages/GetCurrency"

ReactDOM.render(
  <Router>
    <Route exact path="/" component={GetCurrency} />
    <Route exact path="/insert" component={InsertCurrency} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
