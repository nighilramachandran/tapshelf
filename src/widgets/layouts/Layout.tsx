import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import { Box, Grid, Stack } from "@mui/material";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <Grid
      container
      sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
      spacing={0.5}
    >
      <Grid
        item
        xs={12}
        sm={2}
        sx={{ height: "inherit", position: "relative" }}
      >
        <SideBar />
      </Grid>
      <Grid item xs={12} sm={10}>
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
