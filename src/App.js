import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.Component";
import Products from "./pages/productlisting/Products.component";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
