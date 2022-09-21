import React from "react";
import AdvantagesCard from "../../ui/advantages-card/advantages-card";
import {
  StyledAdvantagesList,
  AdvantagesList,
  AdvantagesItem,
  StyledTitle,
  StyledButton
} from "./style";
import { AppRoute } from "/src/const";

// список преимуществ
function Advantages({ advantages }) {
  return (
    <StyledAdvantagesList>
      {advantages?.length ? (
        <>
          <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
          <AdvantagesList $isGridList>
            {advantages.map((advantage) => (
              <AdvantagesItem key={advantage.id}>
                <AdvantagesCard {...advantage} />
              </AdvantagesItem>
            ))}
          </AdvantagesList>
          <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
        </>
      ) : null}
    </StyledAdvantagesList>
  );
}

export default Advantages;
