import * as React from "react";

//**************************** MUI ********************************* */
import AppBar from "@mui/material/AppBar";

//************************* style ******************************** */
import { Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="copyRight">
        <p>Copyright © 2020</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
