import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { globalStyles } from "../../utils/globalStyles";
import { HomePageStyles } from "./HomePageStyles";
import { Products } from "../../constants/constants";
import Product from "../../components/Product/Product";

const HomePage = () => {
  return (
    <Box>
      <HomeBanner />

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
    </Box>
  );
};

export default HomePage;
