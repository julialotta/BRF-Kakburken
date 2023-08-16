import styled from "styled-components";
import { IStylingProps } from "../../style/StyledInterface";
import { colors } from "../../style/Mixins";
import { StyledNavLink } from "../../style/TextElements";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  z-index: 10;
  li {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${colors.DarkGreen};
    position: fixed;
    transform: ${(props: IStylingProps) => props.ultransform};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 20px;
    }
  }
`;

interface IProps {
  open: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const RightNav = (props: IProps) => {
  return (
    <Ul ultransform={props.open ? "translateX(0)" : "translateX(100%)"}>
      <StyledNavLink
        to="/"
        active="white"
        hoverColor="white"
        color="black"
        fontSize="19px"
        padding="0 30px 10px 30px">
        Hem
      </StyledNavLink>

      <StyledNavLink
        active="white"
        hoverColor="white"
        color="black"
        to="/nyinflyttad"
        fontSize="19px"
        padding="0 30px 10px 30px">
        Nyinflyttad
      </StyledNavLink>
      <StyledNavLink
        active="white"
        hoverColor="white"
        color="black"
        to="/Dokument"
        fontSize="19px"
        padding="0 30px 10px 30px">
        Dokument
      </StyledNavLink>
      <StyledNavLink
        active="white"
        hoverColor="white"
        color="black"
        to="/Kontakt"
        fontSize="19px"
        padding="0 30px 10px 30px">
        Kontakt
      </StyledNavLink>
    </Ul>
  );
};

export default RightNav;
