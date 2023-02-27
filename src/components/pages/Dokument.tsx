import { GlobalStyle } from "../style/fonts";
import { StyledDLLink, StyledH4 } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";
import { BsDownload } from "react-icons/bs";

export const Dokument = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Dokument</StyledH4>
      <FlexDiv dir='column' gap='15px' align='start' tabletAlign='center'>
        <StyledDLLink
          href='https://brfkakburken.se/Andrahandsuthyrning.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Andrahandsuthyrning
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href='https://brfkakburken.se/Renovering.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Renovering
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href='https://brfkakburken.se//valkommenbrfkakburken.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Information till nya medlemmar
          <BsDownload />
        </StyledDLLink>
      </FlexDiv>
    </>
  );
};
