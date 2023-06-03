import { Box, Typography } from "@mui/material";
import React from "react";
import { getFontSize } from "../../utils/responsiveFontSize";
import { Fonts } from "../../constants/fonts/fonts";
import { colors } from "../../constants/colors/colors";
import { globalStyles } from "../../utils/globalStyles";
import { LocationOn } from "@mui/icons-material";

const ClassifiedProduct = ({ product }) => {
  return (
    <Box
      sx={{
        height: getFontSize(500),
        width: getFontSize(328),
        background: "#FFFFFF",
        boxShadow: "0px 9px 26px rgba(0, 0, 0, 0.06)",
        borderRadius: "20px",
        position: "relative",
      }}
    >
      {product.isUrgent && (
        <Box
          sx={{
            background: "#00C6D7",
            borderRadius: "25px 0px 0px 25px",
            fontFamily: Fonts.POPPINS_BOLD,
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "24px",
            color: colors.MAIN_WHITE,
            position: "absolute",
            right: 0,
            top: "15px",
            padding: "5px",
          }}
        >
          Urgent Selling
        </Box>
      )}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: getFontSize(314),
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
      <Box sx={{ padding: "15px 20px" }}>
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

        <Box
          sx={{
            mt: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Typography sx={globalStyles.blueSubTxt}>${product.price}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <LocationOn fontSize="16px" sx={{ color: "#8D8D8D" }} />
            <Typography
              sx={{
                fontFamily: Fonts.POPPINS_REGULAR,
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: getFontSize(16),
                lineHeight: "24px",
                color: "#8D8D8D",
                whiteSpace: "nowrap",
              }}
            >
              {product.location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassifiedProduct;
