import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Auth from "./../pages/Auth";
import Products from "./../pages/Products";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );
}

export default Main;

