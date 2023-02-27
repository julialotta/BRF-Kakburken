import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import { colors } from "../style/Mixins";
import { StyledH4, StyledLink, StyledP } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";
import drefviken1 from "../../assets/drefviken1.png";

export const Kontakt = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Kontakt</StyledH4>
      <FlexDiv dir='column'>
        <StyledP fontSize='2rem'>
          Kontakta styrelsen i Brf Kakburken via brevlådan i port nr 9 eller{" "}
          <StyledLink
            href='mailto:kburken@hotmail.com'
            color={colors.DarkGreen}
          >
            maila oss
          </StyledLink>
        </StyledP>
        <StyledP fontSize='2rem'>Organisationsnr 769618-1986</StyledP>
        <StyledImg
          width='320px'
          tabletWidth='650px'
          src={drefviken1}
          alt='Drefviken'
        />
      </FlexDiv>
    </>
  );
};
