import styled from "styled-components";
import { device } from "./Mixins";
import { IStylingProps } from "./StyledInterface";

export const StyledImg = styled.img`
  position: ${(props: IStylingProps) => props.position || ""};
  width: ${(props: IStylingProps) => props.width || "100%"};
  height: ${(props: IStylingProps) => props.height || "100%"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};

  @media ${device.tablet} {
    width: ${(props: IStylingProps) => props.tabletWidth || props.width};
  }
`;
