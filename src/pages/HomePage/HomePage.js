import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { globalStyles } from "../../utils/globalStyles";
import { HomePageStyles } from "./HomePageStyles";
import { ClassifiedProducts, Products } from "../../constants/constants";
import Product from "../../components/Product/Product";
import {
  ArrowLeft,
  ArrowRight,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { getFontSize } from "../../utils/responsiveFontSize";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";
import ClassifiedProduct from "../../components/ClassifiedProduct/ClassifiedProduct";
import { Images } from "../../constants/images/images";

const HomePage = () => {
  return (
    <Box>
      {/* Banner */}

      <HomeBanner />

      {/* Products */}

      <Box sx={{ ...globalStyles.maxWidthContainer, my: "40px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "40px",
          }}
        >
          <Typography sx={HomePageStyles.headText}>Best Deals</Typography>
          <Typography sx={globalStyles.blueSubTxt}>View all</Typography>
        </Box>

        <Grid container rowSpacing={{ xs: 2, sm: 4, md: 7 }} columnSpacing={5}>
          {Products.map((product) => (
            <Grid key={product.name} item xs={12} md={6} lg={3} xl={2.4}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Classified Products */}
      <Box sx={{ backgroundColor: "#E5E5E5" }}>
        <Box
          sx={{
            ...globalStyles.maxWidthContainer,
            py: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "auto",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              maxWidth: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                ...HomePageStyles.headText,
                width: "230px",
                textAlign: "center",
              }}
            >
              Classified Products on the week
            </Typography>

            <Box sx={{ mt: "20px" }}>
              <IconButton
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 6px 14px rgba(100, 106, 131, 0.16)",
                }}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <IconButton
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 6px 14px rgba(100, 106, 131, 0.16)",
                  marginLeft: "15px",
                }}
              >
                <KeyboardArrowRight />
              </IconButton>
            </Box>

            <Button
              sx={{
                width: getFontSize(164),
                height: getFontSize(70),
                background: "#00C6D7",
                boxShadow: "0px 11px 27px rgba(0, 198, 215, 0.35)",
                borderRadius: "12px",
                fontFamily: Fonts.POPPINS_BOLD,
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: getFontSize(18),
                lineHeight: "27px",
                color: colors.MAIN_WHITE,
                zIndex: "10px",
                mt: "25px",
              }}
              variant="contained"
              endIcon={<KeyboardArrowRight />}
            >
              Explore
            </Button>
          </Box>

          {ClassifiedProducts.map((product) => (
            <ClassifiedProduct product={product} key={product.name} />
          ))}
        </Box>
      </Box>

      {/* Sign up for newsletter */}
      <Box sx={{ backgroundColor: colors.PRIMARY }}>
        <Box
          sx={{
            ...globalStyles.maxWidthContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "70px",
            flexWrap: "wrap",
            gap: "40px",
            position: "relative",
          }}
        >
          <img
            src={Images.DOT_BOX}
            style={{
              height: "50px",
              width: "50px",
              objectFit: "contain",
              position: "absolute",
              top: "50px",
              left: "450px",
            }}
            alt="dot box"
          />
          <img
            src={Images.DOT_BOX}
            style={{
              height: "50px",
              width: "50px",
              objectFit: "contain",
              position: "absolute",
              bottom: "60px",
              right: "100px",
            }}
            alt="dot box"
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <img
              src={Images.MAIL_VECTOR}
              style={{ width: getFontSize(116), objectFit: "contain" }}
              alt="mail vector"
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: Fonts.POPPINS_BOLD,
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: getFontSize(30),
                  lineHeight: "45px",
                  color: colors.MAIN_WHITE,
                }}
              >
                Sign Up for Newsletter
              </Typography>
              <Typography
                sx={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: getFontSize(18),
                  lineHeight: "32px",
                  color: colors.MAIN_WHITE,
                  maxWidth: "600px",
                  mt: "15px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Box>

          <TextField
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              width: { xs: "100%", md: "600px" },
            }}
            size="medium"
            placeholder="Enter your email here"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      fontFamily: Fonts.POPPINS_MEDIUM,
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: getFontSize(18),
                      lineHeight: "24px",
                      color: colors.MAIN_WHITE,
                      backgroundColor: "#4D4D4D",
                    }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
