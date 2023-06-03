import { Box, Typography } from "@mui/material";
import React from "react";
import { Images } from "../../constants/images/images";
import { getFontSize } from "../../utils/responsiveFontSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";

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
        <Box
          sx={{
            position: "relative",
            margin: "auto",
            width: width < 1400 ? "80%" : getFontSize(1620),
          }}
        >
          <img
            src={Images.BANNER}
            alt="banner"
            style={{
              width: width < 1400 ? "100%" : getFontSize(1620),
              objectFit: "contain",
              margin: "auto",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(0%,-50%)",
              fontFamily: Fonts.POPPINS_LIGHT,
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: getFontSize(48),
              lineHeight: "121.8%",
              textTransform: "capitalize",
              color: colors.MAIN_WHITE,
              display: width < 1200 ? "none" : "block",
            }}
          >
            From students to senior citizens <br /> this web portal of
            <br />
            <span style={{ fontFamily: Fonts.POPPINS_BOLD, fontWeight: "600" }}>
              "Products and Classifieds”
            </span>
            <br /> provides it all
          </Typography>
        </Box>
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
