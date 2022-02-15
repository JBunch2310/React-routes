import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="product/1"> Product 1</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
