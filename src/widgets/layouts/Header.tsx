import { AppBar, Input, TextField, Toolbar } from "@mui/material";
import React, { CSSProperties } from "react";
import { HEADER_SPACINGS } from "../../utils/config";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        position: "sticky",
        bgcolor: "background.header",
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER_SPACINGS.H_MOBILE,
            md: HEADER_SPACINGS.H_MAIN_DESKTOP,
          },
        }}
      >
        <TextField></TextField>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
