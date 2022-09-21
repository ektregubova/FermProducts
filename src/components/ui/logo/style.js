import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  height: 44px;
  margin-left: -4px;
  align-items: center;
  text-decoration: none;

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
  }
`;

export const Text = styled.span`
  display: flex;
  height: 44px;
  margin-left: 25px;
  font-weight: 700;
  font-size: 28px;
  line-height: 44px;
  color: ${(props) => props.theme.colorBlackForText};
`;
