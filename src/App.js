import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.Component";
import Products from "./pages/productlisting/Products.component";
import Cart from "./pages/cart/Cart";
import { ToastContainer } from 'react-toastify';
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
