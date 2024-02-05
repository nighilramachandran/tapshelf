import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import { Box, Grid, Stack } from "@mui/material";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <Grid container sx={{ height: "100vh" }} spacing={0.5}>
      <Grid item xs={12} sm={2} sx={{ height: "inherit" }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Stack>
          <Header />
          <Box sx={{ p: 3 }}>
            <Outlet />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Layout;
