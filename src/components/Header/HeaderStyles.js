import { colors } from "../../constants/colors/colors";
import { Fonts } from "../../constants/fonts/fonts";
import { getFontSize } from "../../utils/responsiveFontSize";

export const HeaderStyles = {
  blueHeaderTxt: {
    color: colors.MAIN_WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: getFontSize(16),
    lineHeight: "24px",
    whiteSpace: "nowrap",
  },
  headerCategoryTxt: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: getFontSize(16),
    lineHeight: "24px",
    textTransform: "capitalize",
    color: colors.DISABLED_TXT,
    whiteSpace: "nowrap",
  },
};
