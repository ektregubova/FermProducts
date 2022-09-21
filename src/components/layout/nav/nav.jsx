import React from "react";
import { StyledButton } from "./style";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import { Ul, Li } from "/src/components/styled";
import Button from "/src/components/ui/button/button";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
