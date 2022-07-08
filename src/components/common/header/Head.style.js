import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const SLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ebe6e6;
  }
`;
export const DLink = styled(NavLink)`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #343436;
  }
`;
