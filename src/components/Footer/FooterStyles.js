import { colors } from "../../constants/colors/colors";
import { Fonts } from "../../constants/fonts/fonts";
import { getFontSize } from "../../utils/responsiveFontSize";

export const FooterStyles = {
  logoTxt: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: getFontSize(18),
    lineHeight: "28px",
    color: "#8D8D8D",
  },
  headText: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: getFontSize(20),
    lineHeight: "30px",
    color: colors.MAIN_BLACK,
    whiteSpace: "nowrap",
  },
};
