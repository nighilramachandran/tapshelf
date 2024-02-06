import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import { Box, Grid, Stack } from "@mui/material";
import Header from "./Header";
import useResponsive from "../../utils/hooks/useResponsive";

const Layout: React.FC = () => {
  const isDesktop = useResponsive("up", "md");
  return (
    <Grid
      container
      sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
      spacing={0.5}
    >
      {isDesktop && (
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ height: "inherit", position: "relative" }}
        >
          <SideBar />
        </Grid>
      )}
      <Grid item xs={12} sm={isDesktop ? 10 : 12}>
        <Stack>
          <Header />
          <Box
            sx={{
              p: 3,
              overflowY: "auto",
              maxHeight: "calc(100vh - 55px)",
            }}
          >
            <Outlet />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Layout;
