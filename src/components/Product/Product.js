import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { getFontSize } from "../../utils/responsiveFontSize";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";
import { globalStyles } from "../../utils/globalStyles";
import { ShoppingCart, Star } from "@mui/icons-material";

const Product = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: getFontSize(117), objectFit: "contain" }}
      />
      <Box>
        <Typography
          sx={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: getFontSize(16),
            lineHeight: "24px",
            color: colors.MAIN_BLACK,
            height: "50px",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          sx={{
            fontFamily: Fonts.POPPINS_REGULAR,
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            color: colors.DISABLED_TXT,
            mt: "5px",
          }}
        >
          Stock : {product.stock}
        </Typography>

        <Typography sx={{ mt: "15px", ...globalStyles.blueSubTxt }}>
          ${product.price}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {[1, 2, 3, 4].map((count) => (
            <Star
              key={count}
              sx={{ color: colors.PRIMARY, fontSize: "14px" }}
            />
          ))}

          <Typography
            sx={{
              fontFamily: Fonts.POPPINS_REGULAR,
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#8D8D8D",
            }}
          >
            ({product.rating})
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            mt: "5px",
          }}
        >
          {true ? (
            <React.Fragment>
              <Button
                sx={{ width: "10px", minWidth: "10px" }}
                variant="outlined"
              >
                -
              </Button>
              <Typography sx={{ width: "20px", textAlign: "center" }}>
                {5}
              </Typography>
              <Button
                sx={{ width: "10px", minWidth: "10px" }}
                variant="outlined"
              >
                +
              </Button>
            </React.Fragment>
          ) : (
            <Button
              startIcon={<ShoppingCart />}
              sx={{ textTransform: "none" }}
              variant="contained"
            >
              Add to cart
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
