import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import fasadRitning from "../../assets/Fasadritning.png";
import { StyledH4 } from "../style/TextElements";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Välkomna till BRF Kakburken</StyledH4>
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
