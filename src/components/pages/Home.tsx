import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import fasadRitning from "../../assets/Fasadritning.png";
import { StyledDLLink, StyledH4 } from "../style/TextElements";
import { BsDownload } from "react-icons/bs";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Välkomna till BRF Kakburken</StyledH4>
      <StyledDLLink
        href='https://brfkakburken.se//AR2022BrfKakburken.pdf'
        target='_blank'
        rel='noopener noreferrer'
        margin='10px 0 30px 0'
      >
        Årsredovisning 2022
        <BsDownload />
      </StyledDLLink>
      <StyledImg
        width='400px'
        tabletWidth='650px'
        laptopWidth='900px'
        src={fasadRitning}
        alt='Drefviken'
      />
    </>
  );
};
