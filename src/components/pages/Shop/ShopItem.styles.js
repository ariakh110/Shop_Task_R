import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 50rem;
  button {
    border-radius: 0 0 20px 20px;
    cursor: pointer;
  }
  img {
    min-height: 460px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px; /* fallback */
    max-height: 32px; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  div {
    position: relative;
    font-family: "Roboto", sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
