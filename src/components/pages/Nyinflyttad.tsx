import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import apartment from "../../assets/apartment.png";
import { StyledH4, StyledLink, StyledP } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";

export const Nyinflyttad = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Nyinflyttad</StyledH4>
      <StyledImg
        width='300px'
        tabletWidth='650px'
        src={apartment}
        alt='Apartment'
      />
      <FlexDiv dir='column' width='300px' tabletWidth='400px'>
        <StyledP fontSize='2rem'>
          Varmt välkommen till bostadsrättsföreningen Kakburken i Sköndal
        </StyledP>
        <StyledP fontSize='1.6rem'>
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
