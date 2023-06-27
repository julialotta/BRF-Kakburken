import React from "react";
import GoogleMapReact from "google-map-react";
import { FlexDiv } from "./style/Wrappers";
import { colors } from "./style/Mixins";
import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { StyledP } from "./style/TextElements";

interface MarkerProps {
  lat: number;
  lng: number;
}

const InfoComponent = () => (
  <FlexDiv
    z='100'
    background={colors.LightGreen}
    width='250px'
    height='100px'
    position='absolute'
    left='0'
    top='0'
    dir='column'
    padding='20px'
  >
    <FlexDiv dir='column' gap='10px'>
      <FlexDiv width='100%' height='min-content' dir='column'>
        <FlexDiv gap='5px' justify='left'>
          <AiOutlineHome size={14} />
          <StyledP fontSize='14px'>
            <strong>Adress</strong>
          </StyledP>
        </FlexDiv>
        <FlexDiv justify='left'>
          <StyledP fontSize='14px'>Mandelbrödsvägen, 128 69 Sköndal</StyledP>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv width='100%' height='min-content' dir='column'>
        <FlexDiv gap='5px' justify='left'>
          <AiOutlineMail size={14} />
          <StyledP fontSize='14px'>
            <strong>E-post</strong>
          </StyledP>
        </FlexDiv>
        <FlexDiv justify='left'>
          <StyledP fontSize='14px'>kburken [at] hotmail.com</StyledP>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  </FlexDiv>
);
const MarkerComponent: React.FC<MarkerProps> = () => (
  <RiMapPinLine color='red' size={24} />
);

export const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 59.256184437065805,
      lng: 18.10497576365229,
    },
    zoom: 15,
  };

  return (
    <>
      <div
        style={{
          height: "60vh",
          width: "100%",
          marginBottom: "5rem",
          position: "relative",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY || "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <MarkerComponent lat={59.256184437065805} lng={18.10497576365229} />
        </GoogleMapReact>
        <InfoComponent />
      </div>
    </>
  );
};
