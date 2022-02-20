import { useContext } from "react";
import StyleContext from "../context/StyleContext";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  background: ${({ styleType }) => {
    return styleType.background;
  }};
  color: ${({ styleType }) => {
    return styleType.color;
  }};
  border: 1px solid
    ${({ colors }) => {
      return colors.blackColor;
    }};
  padding: 15px;
  ${({ box }) => {
    return box ? box : null;
  }}
`;

export const Button = ({ content, type, styleType, shadow }) => {
  const { layout } = useContext(StyleContext);

  const stylesTypeMap = {
    bright: {
      background: layout.colors.blackColor,
      color: layout.colors.whiteColor,
    },
    light: {
      background: layout.colors.whiteColor,
      color: layout.colors.blackColor,
    },
    gray: {
      background: layout.colors.sectionBgc,
      color: layout.colors.blackColor,
    },
  };
  return (
    <ButtonWrapper
      colors={layout.colors}
      box={shadow ? layout.box : null}
      styleType={stylesTypeMap[styleType]}
      type={type}
    >
      {content}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  type: "button",
  styleType: "gray",
  shadow: false,
};

export default Button;
