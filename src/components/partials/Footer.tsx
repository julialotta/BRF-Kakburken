import { colors } from "../style/Mixins";
import { StyledP } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";

function Footer() {
  return (
    <FlexDiv
      background={colors.DarkGreen}
      height='3em'
      width='100vw'
      position='fixed'
      bottom='0'
    >
      <StyledP color={colors.White} fontSize='10px'>
        &copy; 2022 Brf Kakburken
      </StyledP>
    </FlexDiv>
  );
}

export default Footer;
