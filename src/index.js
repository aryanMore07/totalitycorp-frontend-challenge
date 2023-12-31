import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/products.context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
