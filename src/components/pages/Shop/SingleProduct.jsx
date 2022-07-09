import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
//************************* Components *************************** */
//notification
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
//************************* style *************************** */
import { Wrapper } from "./SingleProduct.styles";
//************************* MUI *************************** */
import { Button, IconButton, Rating } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const SingleProduct = () => {
  //router params
  // const { id } = useParams();
  //get item from navigation
  const location = useLocation();
  const { image, price, description, title, rating } = location.state;
  //************************* States *************************** */
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  //************************* Handlers *************************** */
  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  const handleRemoveQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  useEffect(() => {
    const handleTotalAmount = () => {
      const newTotalPrice = quantity * price;
      setTotalPrice(newTotalPrice);
    };
    handleTotalAmount();
  }, [quantity]);

  const notify = () =>
    toast.info("Total Price: " + totalPrice, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  //************************* Render *************************** */
  return (
    <>
      {!!location.state && (
        <Wrapper>
          <div className="single-product-container">
            <div className="single-product-info-container">
              <IconButton aria-label="back">
                <ArrowBackOutlinedIcon />
              </IconButton>
              <h1>{title}</h1>
              <div>
                <h3>description</h3>
                <hr />
                <p>{description}</p>
                <hr />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDiraction: "row",
                  alignItems: "center",
                }}
              >
                <Rating name="rating" value={rating.rate} />
                <p> {rating.rate}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDiraction: "row",
                  alignItems: "center",
                }}
              >
                <CommentOutlinedIcon fontSize="small" />
                &nbsp;&nbsp;
                <p>comments: {rating.rate}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDiraction: "row",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="minimize"
                  onClick={handleRemoveQuantity}
                >
                  <RemoveOutlinedIcon />
                </IconButton>
                &nbsp;&nbsp;
                <p>quantity : {quantity}</p>
                &nbsp;&nbsp;
                <IconButton
                  color="primary"
                  aria-label="minimize"
                  onClick={handleAddQuantity}
                >
                  <AddIcon />
                </IconButton>
              </div>
              <div>
                <Button variant="contained" onClick={notify}>
                  {totalPrice}$
                </Button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <ToastContainer />
              </div>
            </div>
            <div className="single-product-image-container">
              <div
                style={{
                  width: "60%",
                  height: "60%",
                  background: `url(${image}) center center / contain no-repeat`,
                }}
              ></div>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default SingleProduct;
