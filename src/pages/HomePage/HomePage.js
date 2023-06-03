import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { globalStyles } from "../../utils/globalStyles";
import { HomePageStyles } from "./HomePageStyles";
import { ClassifiedProducts, Products } from "../../constants/constants";
import Product from "../../components/Product/Product";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { getFontSize } from "../../utils/responsiveFontSize";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";
import ClassifiedProduct from "../../components/ClassifiedProduct/ClassifiedProduct";

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
            <Grid
              sx={{
                cursor: "pointer",
              }}
              key={product.name}
              item
              xs={12}
              md={6}
              lg={3}
              xl={2.4}
            >
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Classified Products */}

      <Box
        sx={{
          ...globalStyles.maxWidthContainer,
          backgroundColor: "#E5E5E5",
          py: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "auto",
          gap: "40px",
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
              <ArrowLeft />
            </IconButton>
            <IconButton
              sx={{
                background: "#FFFFFF",
                boxShadow: "0px 6px 14px rgba(100, 106, 131, 0.16)",
                marginLeft: "15px",
              }}
            >
              <ArrowRight />
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
            endIcon={<ArrowRight />}
          >
            Explore
          </Button>
        </Box>

        {ClassifiedProducts.map((product) => (
          <ClassifiedProduct product={product} key={product.name} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
