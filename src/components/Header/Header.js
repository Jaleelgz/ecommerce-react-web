import {
  Badge,
  Box,
  Button,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors/colors";
import {
  AccountCircle,
  ArrowDropDown,
  Call,
  FavoriteBorder,
  LocationOn,
  Mail,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { getFontSize } from "../../utils/responsiveFontSize";
import { globalStyles } from "../../utils/globalStyles";
import { Fonts } from "../../constants/fonts/fonts";
import { HeaderStyles } from "./HeaderStyles";
import { Images } from "../../constants/images/images";
import { HeaderCategories } from "../../constants/constants";

const Header = () => {
  return (
    <Box>
      {/* Blue Header */}
      <Box
        sx={{
          ...globalStyles.maxWidthContainer,
          backgroundColor: colors.PRIMARY,
          minHeight: "53px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "auto",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Call fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
            <Typography sx={HeaderStyles.blueHeaderTxt}>
              +221 33 66 22
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Mail fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
            <Typography sx={HeaderStyles.blueHeaderTxt}>
              support@elextra.io
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <LocationOn fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
            <Typography sx={HeaderStyles.blueHeaderTxt}>Locations</Typography>
          </Box>

          <Divider
            sx={{
              backgroundColor: colors.MAIN_WHITE,
              borderColor: colors.MAIN_WHITE,
            }}
            orientation="vertical"
            flexItem
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography sx={HeaderStyles.blueHeaderTxt}>
              $ Dollar (US)
            </Typography>
            <ArrowDropDown fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography sx={HeaderStyles.blueHeaderTxt}>EN</Typography>
            <ArrowDropDown fontSize="20px" sx={{ color: colors.MAIN_WHITE }} />
          </Box>
        </Box>
      </Box>

      {/* Logo Header */}
      <Box
        sx={{
          ...globalStyles.maxWidthContainer,
          width: "100%",
          background: colors.MAIN_WHITE,
          boxShadow: "0px 20px 39px rgba(0, 0, 0, 0.03)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "50px",
            overflow: "auto",
            zIndex: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <img
              style={{ height: getFontSize(105), objectFit: "contain",backgroundColor:'#fffff2' }}
              src={Images.LOGO}
              alt="logo"
            />

            <TextField
              fullWidth
              size="medium"
              value={"Classifieds"}
              select
              sx={{
                backgroundColor: "#F8F8F8",
                outline: "none",
                border: "none",
                width: getFontSize(246),
                height: getFontSize(70),
              }}
            >
              <MenuItem value={"Classifieds"}>Classifieds</MenuItem>
            </TextField>

            <TextField
              fullWidth
              size="medium"
              placeholder="Search here..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "#F8F8F8",
                outline: "none",
                border: "none",
                width: getFontSize(554),
                height: getFontSize(70),
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <FavoriteBorder fontSize="20px" />
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined fontSize="20px" />
              </Badge>
              <AccountCircle fontSize="20px" />
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
              }}
              variant="contained"
            >
              Classifieds
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            overflow: "auto",
            mt:'5px'
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            //   ml: "15px",
            }}
          >
            <Typography sx={HeaderStyles.headerCategoryTxt}>
              All categories
            </Typography>
            <ArrowDropDown
              fontSize="20px"
              sx={{ color: colors.DISABLED_TXT }}
            />
          </Box>

          {HeaderCategories.map((category) => (
            <Typography key={category} sx={HeaderStyles.headerCategoryTxt}>
              {category}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
