import styled from "styled-components";
//assets
import bgImage from "../common/assets/images/banner.jpg";

export const Container = styled.div`
  min-height: 100vh;
  .banner-img {
    background: url(${bgImage}) center center / cover no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    direction: rtl;
    .banner-container {
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      .banner-items {
        position: relative;
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          color: #f9f9f9;
          direction: ltr;
          margin: 0 20px;
          text-align: center;
        }
        button {
          width: 150px;
          height: 50px;
          margin-top: 10px;
        }
      }
    }
  }
`;
