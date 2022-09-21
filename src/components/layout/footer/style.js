import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.pageWidth};
  padding-top: 0;
  padding-bottom: 0;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
