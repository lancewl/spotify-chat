import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4CB45F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#121212",
    },
  },
});

export default theme;
