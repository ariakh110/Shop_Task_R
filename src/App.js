import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Head from "./components/common/header/Head";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop/Shop";
import SingleProduct from "./components/pages/Shop/SingleProduct";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Head></Head>
      <Routes location={location} key={location.pathname}>
        <Route path="/Home" element={<Navigate replace to="/" />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="/shop/:productId" element={<SingleProduct />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
