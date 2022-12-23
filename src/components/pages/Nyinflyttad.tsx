import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import apartment from "../../assets/apartment.png";
import { StyledLink, StyledP } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";

export const Nyinflyttad = () => {
  return (
    <>
      <GlobalStyle />
      <h3>Nyinflyttad</h3>
      <StyledImg
        width='300px'
        tabletWidth='400px'
        src={apartment}
        alt='Apartment'
      />
      <FlexDiv dir='column' width='300px' tabletWidth='400px'>
        <StyledP fontSize='16px'>
          Varmt välkommen till bostadsrättsföreningen Kakburken i Sköndal
        </StyledP>
        <StyledP>
          Vi har försökt samla en del nyttig information som kan vara bra att
          veta inför flytten till ditt nya hem, ta del av den{" "}
          <StyledLink
            href='https://brfkakburken.se//valkommenbrfkakburken.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            här
          </StyledLink>
          .
        </StyledP>
      </FlexDiv>
    </>
  );
};
