import styled from "styled-components";

export const Wrapper = styled.div`
  .single-product-container {
    display: flex;
    flex-direction: row-reverse;
    height: 600px;
    justify-content: space-around;
    padding: 20px;
    .single-product-info-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      position: relative;
      width: 50%;
    }
    .single-product-image-container {
      align-items: center;
      border: 1px solid #06283d;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 600px;
      width: 30%;
    }
  }
`;
