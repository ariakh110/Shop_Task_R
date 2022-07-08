import React from "react";

import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
//*************************** MUI ***************************** */

//*************************** api ***************************** */
import * as api from "../../../api/api"

//style



const Shop = () => {
  const { data: products, isLoading, error } = useQuery(["products"], async () => {
    const response = await fetch("/api/products");



  if (isLoading)
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  if (error) return <div>Error!</div>;
  return (
    <>
      <h1>Shop</h1>
      <Outlet />
    </>
  );
};

export default Shop;
