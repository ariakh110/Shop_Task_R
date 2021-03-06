import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Head from "./components/common/header/Head";
import Footer from "./components/common/footer/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop/Shop";
import SingleProduct from "./components/pages/Shop/SingleProduct";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Head />
      <Routes location={location} key={location.pathname}>
        <Route path="/Home" element={<Navigate replace to="/" />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-Product/:id" element={<SingleProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
