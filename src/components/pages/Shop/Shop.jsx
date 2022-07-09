import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import _ from "lodash";

//************************* components *************************** */
import ShopItem from "./ShopItem";
//*************************** MUI ***************************** */
import { Box, CircularProgress, Drawer, Grid } from "@mui/material";
//*************************** api ***************************** */
import * as api from "../../../api/api";

//style
import { Wrapper } from "./Shop.styles";

const Shop = () => {
  //************************* fetch data *************************** */
  const { data: products, isLoading, error } = useQuery(
    "products",
    api.getAllProducts
  );
  //************************* navigate *************************** */
  const navigate = useNavigate();
  const handleOnClickShopItem = (id, item) => {
    navigate(`/single-Product/${id}`, { state: item });
  };
  //************************* render *************************** */
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
      {!!products && (
        <Wrapper>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {_.map(products, (product) => (
                <Grid item key={product.id} xs={12} sm={3}>
                  <ShopItem
                    props={product}
                    handleOnClickShopItem={handleOnClickShopItem}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container spacing={3}></Grid>
        </Wrapper>
      )}
      <Outlet />
    </>
  );
};
export default Shop;
