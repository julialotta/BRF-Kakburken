import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors, device } from "./Mixins";

export const FlexDiv = styled.div`
  display: flex;
  position: ${(props: IStylingProps) => props.position || ""};
  flex-direction: ${(props: IStylingProps) => props.dir || "row"};
  align-items: ${(props: IStylingProps) => props.align || "center"};
  text-align: ${(props: IStylingProps) => props.textAlign || "center"};
  justify-content: ${(props: IStylingProps) => props.justify || "center"};
  flex-wrap: ${(props: IStylingProps) => props.wrap || "nowrap"};
  background-color: ${(props: IStylingProps) => props.background || "none"};
  width: ${(props: IStylingProps) => props.width || "100%"};
  height: ${(props: IStylingProps) => props.height || "100%"};
  min-height: ${(props: IStylingProps) => props.minHeight || "0"};
  gap: ${(props: IStylingProps) => props.gap || "0"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  top: ${(props: IStylingProps) => props.top || "auto"};
  left: ${(props: IStylingProps) => props.left || "auto"};
  bottom: ${(props: IStylingProps) => props.bottom || "x"};
  flex-wrap: ${(props: IStylingProps) => props.wrap || "nowrap"};
  z-index: ${(props: IStylingProps) => props.z || "auto"};

  @media ${device.tablet} {
    width: ${(props: IStylingProps) => props.tabletWidth || props.width};
    align-items: ${(props: IStylingProps) => props.tabletAlign || "center"};
    flex-wrap: ${(props: IStylingProps) => props.tabletWrap || "nowrap"};
  }
`;

export const AppWrapper = styled.div`
  background-color: ${colors.White};
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
`;
