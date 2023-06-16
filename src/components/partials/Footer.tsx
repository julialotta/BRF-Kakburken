import { colors } from "../style/Mixins";
import { StyledP } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";

function Footer() {
  return (
    <FlexDiv
      background={colors.DarkGreen}
      height='5rem'
      width='100vw'
      position='fixed'
      bottom='0'
    >
      <StyledP color={colors.White} fontSize='1.3rem'>
        &copy; 2023 Brf Kakburken
      </StyledP>
    </FlexDiv>
  );
}

export default Footer;
