import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { Text, StyledLogo } from "./style";

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
