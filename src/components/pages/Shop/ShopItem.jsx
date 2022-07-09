import React from "react";
/******************************MUI**************************** */
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Rating from "@mui/material/Rating";

//style
import { Wrapper } from "./ShopItem.styles";

const ShopItem = ({ props, handleOnClickShopItem }) => {
  const { id, image, price, description, title, rating } = props;
  return (
    <>
      <Wrapper>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <h3>${price}</h3>
          <Typography component="legend">
            <CommentOutlinedIcon /> / {rating.count}
          </Typography>
          <Rating name="rating" value={rating.rate} />
        </div>
        <Divider />
        <Button
          variant="outlined"
          startIcon={<ShoppingCartOutlinedIcon />}
          onClick={() => handleOnClickShopItem(id)}
        >
          view
        </Button>
      </Wrapper>
    </>
  );
};

export default ShopItem;
