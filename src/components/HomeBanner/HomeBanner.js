import { Box } from "@mui/material";
import React from "react";
import { Images } from "../../constants/images/images";
import { getFontSize } from "../../utils/responsiveFontSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HomeBanner = () => {
  const { width } = useWindowDimensions();
  return (
    <Box
      sx={{
        my: "50px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={Images.LEFT_PLACEHOLDER}
          alt="left-banner"
          style={{
            height: getFontSize(530),
            objectFit: "contain",
            display: width < 1400 ? "none" : "block",
          }}
        />
        <img
          src={Images.BANNER}
          alt="banner"
          style={{
            width: width < 1400 ? "80%" : getFontSize(1620),
            objectFit: "contain",
            margin: "auto",
          }}
        />
        <img
          src={Images.RIGHT_PLACEHOLDER}
          alt="right-banner"
          style={{
            height: getFontSize(530),
            objectFit: "contain",
            display: width < 1400 ? "none" : "block",
          }}
        />
      </Box>
      <img
        src={Images.DOT_SLIDER}
        alt="banner"
        style={{ height: "10px", objectFit: "contain", marginTop: "20px" }}
      />
    </Box>
  );
};

export default HomeBanner;
