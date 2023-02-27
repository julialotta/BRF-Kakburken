import { GlobalStyle } from "../style/fonts";
import { colors } from "../style/Mixins";
import { StyledH1, StyledNavLink } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <>
      <GlobalStyle />

      <FlexDiv width='100vw'>
        <FlexDiv
          dir='column'
          background={colors.LightBlue}
          margin='0'
          justify='center'
        >
          <FlexDiv margin='0'>
            <StyledNavLink to='/' color='black'>
              <StyledH1>BRF KAKBURKEN</StyledH1>
            </StyledNavLink>
          </FlexDiv>
          <FlexDiv margin='0'>
            <Navbar />
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </>
  );
}

export default Header;
