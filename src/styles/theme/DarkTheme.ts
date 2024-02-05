import { ThemeOptions } from "@mui/material/styles";
import { componetnsOverrides } from "./overrides/components";
import { typographyStylesOverrides } from "./overrides/components/TypographyFontStyle";
import { typographyOverride } from "./overrides/components/Typography";
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    text: {
      primary: "#959ea8",
      secondary: "#0066ee",
      dark: "#39404c",
      success: "#23ae6c",
      danger: "#dd534a",
    },
    background: {
      default: "#f0f1f3",
      header: "#ffffff",
      secondary: "#ffffff",
      paper: "#ffffff",
    },
    primary: {
      main: "#4c4e6e",
    },
  },
  // shape: { ...shapOverrides },
  typography: { ...typographyStylesOverrides, ...typographyOverride },

  components: {
    ...componetnsOverrides,
  },
};

export default darkThemeOptions;
