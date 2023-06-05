import { colors } from "../constants/colors/colors";
import { Fonts } from "../constants/fonts/fonts";
import { getFontSize } from "./responsiveFontSize";

export const globalStyles = {
  maxWidthContainer: {
    maxWidth: "1620px",
    margin: "0px auto",
    padding: "1vw 3vw",
  },
  blueSubTxt: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: getFontSize(20),
    lineHeight: "30px",
    color: colors.PRIMARY,
  },
};
