import React from "react";

import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import _ from "lodash";

//************************* components *************************** */
import ShopItem from "./ShopItem";
//*************************** MUI ***************************** */
import { Box, CircularProgress, Drawer, Grid } from "@mui/material";
//*************************** api ***************************** */
import * as api from "../../../api/api";

//style
import { Wrapper, StyledButton } from "./Shop.styles";

const Shop = () => {
  const { data: products, isLoading, error } = useQuery(
    "products",
    api.getAllProducts
  );

  const handleOnClickShopItem = (id) => {
    console.log(id);
  };

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
                <Grid item key={product.id} xs={12} sm={4}>
                  <ShopItem item={product} handleOnClickShopItem />
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
