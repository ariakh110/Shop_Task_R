import React from "react";
import { useNavigate } from "react-router-dom";
//MUI
import Button from "@mui/material/Button";
//styles
import { Container } from "./Home.styles";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="banner-img">
        <div className="banner-container">
          <div className="banner-items">
            <h1>Welcome to our shop</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              odit quas inventore asperiores voluptas ea veritatis architecto
              voluptates soluta deleniti totam repellendus similique vel
              aspernatur eum eveniet commodi velit aliquid?
            </p>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
