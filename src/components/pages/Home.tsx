import { GlobalStyle } from "../style/fonts";
import { StyledImg } from "../style/Images";
import drefviken from "../../assets/drefviken.png";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StyledImg
        width='200px'
        tabletWidth='300px'
        src={drefviken}
        alt='Drefviken'
      />

      <h4>Välkomna till BRF Kakburken</h4>
    </>
  );
};
