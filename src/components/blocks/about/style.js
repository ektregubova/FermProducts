import styled from "styled-components";
import { P, Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const Text = styled(P)`
  margin-top: ${(props) => props.theme.indent};
  padding-right: 116px;
  margin-bottom: 40px;
  max-width: 650px;
`;

export const StyledSection = styled(Section)`
  display: flex;
  min-height: 550px;
  flex-direction: column;
  box-sizing: border-box;

  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 183px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.colorForBackground};
  align-items: center;
  z-index: 1;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;
