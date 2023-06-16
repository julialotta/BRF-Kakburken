import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { NavLink } from "react-router-dom";
import { colors } from "./Mixins";

export const StyledNavLink = styled(NavLink)`
  color: ${(props: IStylingProps) => props.color || colors.DarkGreen};
  font-size: ${(props: IStylingProps) => props.fontSize || "default"};
  padding: ${(props: IStylingProps) => props.padding || "0"};

  text-decoration: none;
  &.active {
    color: ${(props: IStylingProps) => props.active || props.color};
  }

  :hover {
    cursor: ${(props: IStylingProps) => props.hover || "pointer"};
    color: ${(props: IStylingProps) => props.hoverColor || props.color};
  }
`;

export const StyledP = styled.p`
  color: ${(props: IStylingProps) => props.color || "black"};
  font-size: ${(props: IStylingProps) => props.fontSize || "default"};
`;

export const StyledLink = styled.a`
  color: ${(props: IStylingProps) => props.color || "black"};
  font-size: ${(props: IStylingProps) => props.fontSize || "default"};

  :hover {
    color: ${colors.White};
  }
`;

export const StyledDLLink = styled.a`
  color: ${(props: IStylingProps) => props.color || "black"};
  font-size: ${(props: IStylingProps) => props.fontSize || "2rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  margin: ${(props: IStylingProps) => props.margin || 0};
  :hover {
    color: ${colors.White};
  }
`;

export const StyledH1 = styled.h1`
  font-size: ${(props: IStylingProps) => props.fontSize || "4rem"};
  color: black;
`;
export const StyledH4 = styled.h4`
  font-size: ${(props: IStylingProps) => props.fontSize || "3rem"};
  color: black;
`;
