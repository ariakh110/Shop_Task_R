import React from "react";
import { useParams, useLocation } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default SingleProduct;
