import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"Cairo", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#d3af37",
    },
    secondary: {
      main: "#1b1b1b",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: "#00962a",
    },
    danger: {
      main: red.A400,
    },
    background: {
      default: "#010b13",
      title: "#80800027",
    },
  },
});

export default theme;
