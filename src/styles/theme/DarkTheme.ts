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
    },
    background: {
      default: "#f0f1f3",
      header: "#ffffff",
      secondary: "#ffffff",
      paper: "#ffffff",
    },
    primary: {
      main: "#d6357e",
    },
  },
  // shape: { ...shapOverrides },
  typography: { ...typographyStylesOverrides, ...typographyOverride },

  components: {
    ...componetnsOverrides,
  },
};

export default darkThemeOptions;
