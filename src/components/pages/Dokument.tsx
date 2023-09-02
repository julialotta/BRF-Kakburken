import { GlobalStyle } from "../style/fonts";
import { StyledDLLink, StyledH4 } from "../style/TextElements";
import { FlexDiv } from "../style/Wrappers";
import { BsDownload } from "react-icons/bs";

export const Dokument = () => {
  return (
    <>
      <GlobalStyle />
      <StyledH4>Dokument</StyledH4>
      <FlexDiv dir="column" gap="15px" align="start" textAlign="start">
        <StyledDLLink
          href="https://brfkakburken.se/tvattstugan.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Information Tvättstugan
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se/Parkeringspolicy.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Parkeringspolicy
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se/Andrahandsuthyrning.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Andrahandsuthyrning
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se/Renovering.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Renovering
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//valkommenbrfkakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Information - nya medlemmar
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//Stadgar.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Stadgar
          <BsDownload />
        </StyledDLLink>

        <StyledDLLink
          href="https://brfkakburken.se//BRFKakburkenVisionStrategi.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Vision & strategi
          <BsDownload />
        </StyledDLLink>
        <StyledH4>Årsredovisningar</StyledH4>
        <StyledDLLink
          href="https://brfkakburken.se//AR2022BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2022
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//AR2021BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2021
          <BsDownload />
        </StyledDLLink>

        <StyledDLLink
          href="https://brfkakburken.se//AR2020BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2020
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//AR2019BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2019
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//AR2018BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2018
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//AR2017BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2017
          <BsDownload />
        </StyledDLLink>
        <StyledDLLink
          href="https://brfkakburken.se//AR2016BrfKakburken.pdf"
          target="_blank"
          rel="noopener noreferrer">
          2016
          <BsDownload />
        </StyledDLLink>
        <StyledH4>Protokoll</StyledH4>
        <StyledDLLink
          href="https://brfkakburken.se//Protokoll270623.pdf"
          target="_blank"
          rel="noopener noreferrer"
          margin="10px 0 30px 0">
          Årsstämma 2023
          <BsDownload />
        </StyledDLLink>
      </FlexDiv>
    </>
  );
};
