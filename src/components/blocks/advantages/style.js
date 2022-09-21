import styled from "styled-components";
import { Li, Section, Ul } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export const StyledAdvantagesList = styled(Section)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorWhite};
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const AdvantagesList = styled(Ul)`
  margin-top: 64px;
  margin-bottom: 64px;
`;

export const AdvantagesItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 64px;
`;
