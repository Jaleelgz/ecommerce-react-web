import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { globalStyles } from "../../utils/globalStyles";
import { colors } from "../../constants/colors/colors";
import { getFontSize } from "../../utils/responsiveFontSize";
import { Images } from "../../constants/images/images";
import { FooterStyles } from "./FooterStyles";
import {
  Apple,
  Facebook,
  HeadsetMic,
  Instagram,
  LinkedIn,
  PlayArrow,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { FooterItems } from "../../constants/constants";
import { Fonts } from "../../constants/fonts/fonts";

const Footer = () => {
  const socialIcons = [
    <YouTube sx={{ color: "#DADADA" }} />,
    <LinkedIn sx={{ color: "#DADADA" }} />,
    <Twitter sx={{ color: "#DADADA" }} />,
    <Facebook sx={{ color: "#DADADA" }} />,
    <Instagram sx={{ color: "#DADADA" }} />,
  ];

  return (
    <Box sx={{ backgroundColor: colors.MAIN_WHITE }}>
      <Box
        sx={{
          ...globalStyles.maxWidthContainer,
          backgroundColor: colors.MAIN_WHITE,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          overflow: "auto",
          gap: "50px",
          py: "50px",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "400px" } }}>
          <img
            style={{
              height: getFontSize(105),
              objectFit: "contain",
              backgroundColor: "#fffff2",
            }}
            src={Images.LOGO}
            alt="logo"
          />
          <Typography sx={FooterStyles.logoTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mt: "20px",
            }}
          >
            {socialIcons.map((icon, index) => (
              <Button
                key={index}
                sx={{
                  background: "#F8F8F8",
                  borderRadius: "12px",
                  height: "50px",
                  width: "50px",
                }}
              >
                {icon}
              </Button>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "25px",
            width: { xs: "100%", md: "auto" },
          }}
        >
          {Object.keys(FooterItems).map((key) => (
            <Box key={key}>
              <Typography sx={FooterStyles.headText}>{key}</Typography>

              <Box sx={{ mt: "15px" }}>
                {FooterItems[key].map((footerItem, index) => (
                  <Typography
                    sx={{ ...FooterStyles.logoTxt, whiteSpace: "nowrap" }}
                    key={footerItem + index}
                  >
                    {footerItem}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ maxWidth: { xs: "100%", md: "400px" } }}>
          <Typography sx={FooterStyles.headText}>CONTACT</Typography>
          <Typography sx={FooterStyles.logoTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              mt: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <HeadsetMic
                sx={{ height: "50px", width: "50px", color: "#8D8D8D" }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: Fonts.POPPINS_REGULAR,
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: getFontSize(14),
                    lineHeight: "24px",
                    color: colors.MAIN_BLACK,
                  }}
                >
                  Have any question?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: Fonts.POPPINS_REGULAR,
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: getFontSize(14),
                    lineHeight: "24px",
                    color: colors.PRIMARY,
                  }}
                >
                  + 123 456 789
                </Typography>
              </Box>
            </Box>

            <Button variant="outlined">CHAT</Button>
          </Box>

          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Box
              sx={{
                background: "#232323",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "10px 15px",
              }}
            >
              <Apple sx={{ fontSize: "40px", color: colors.MAIN_WHITE }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: Fonts.POPPINS_REGULAR,
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: getFontSize(12),
                    lineHeight: "24px",
                    color: colors.MAIN_WHITE,
                    whiteSpace: "nowrap",
                  }}
                >
                  Download now on
                </Typography>
                <Typography
                  sx={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: getFontSize(20),
                    lineHeight: "24px",
                    color: colors.MAIN_WHITE,
                    whiteSpace: "nowrap",
                  }}
                >
                  App Store
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                background: "#232323",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                padding: "10px 15px",
              }}
            >
              <PlayArrow sx={{ fontSize: "40px", color: colors.MAIN_WHITE }} />
              <Box>
                <Typography
                  sx={{
                    fontFamily: Fonts.POPPINS_REGULAR,
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: getFontSize(12),
                    lineHeight: "24px",
                    color: colors.MAIN_WHITE,
                    whiteSpace: "nowrap",
                  }}
                >
                  GET IT ON
                </Typography>
                <Typography
                  sx={{
                    fontFamily: Fonts.POPPINS_MEDIUM,
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: getFontSize(20),
                    lineHeight: "24px",
                    color: colors.MAIN_WHITE,
                    whiteSpace: "nowrap",
                  }}
                >
                  Google Play
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
