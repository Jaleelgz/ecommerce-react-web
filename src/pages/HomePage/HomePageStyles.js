import { colors } from "../../constants/colors/colors";
import { Fonts } from "../../constants/fonts/fonts";
import { getFontSize } from "../../utils/responsiveFontSize";

export const HomePageStyles = {
  headText: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: getFontSize(30),
    lineHeight: "45px",
    color: colors.MAIN_BLACK,
  },
};
