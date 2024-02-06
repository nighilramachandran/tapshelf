import {
  AppBar,
  Avatar,
  Drawer,
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Toolbar,
  drawerClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { HEADER_SPACINGS } from "../../utils/config";
import { useAppDispatch } from "../../redux/hooks";
import { searchProductFunc } from "../../redux/reducers/products";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
import useResponsive from "../../utils/hooks/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../../components/sidebar/SideBar";
const Header: React.FC = () => {
  //states
  const [isInventory, setIsInvetory] = useState<boolean>();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  //location
  const location = useLocation();
  //dispatch
  const dispatch = useAppDispatch();

  //toggle
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  //responsive
  const isDesktop = useResponsive("up", "md");

  //functions
  const handelSearch = (value: string) => {
    dispatch(searchProductFunc(value));
  };

  //useEffects
  useEffect(() => {
    setIsInvetory(location.pathname.split("/")[1] === "" ? true : false);
  }, [location]);

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
          minHeight: {
            xs: HEADER_SPACINGS.H_MOBILE,
            md: HEADER_SPACINGS.H_MAIN_DESKTOP,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {isInventory && (
              <TextField
                InputProps={{
                  startAdornment: (
                    <SearchIcon
                      style={{
                        marginRight: 8,
                      }}
                    />
                  ),
                }}
                placeholder="Search Product"
                onChange={(e) => handelSearch(e.target.value)}
              ></TextField>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={{ sm: "end" }}
            >
              {isDesktop && (
                <>
                  <SvgIcon component={NotificationsIcon} />
                  <Avatar src="/assets/images/avatar.jpg"></Avatar>
                </>
              )}
              {!isDesktop && (
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon sx={{ color: "text.primary" }} />
                </IconButton>
              )}
            </Stack>
          </Grid>
        </Grid>
        <Drawer
          anchor={"left"}
          open={openDrawer}
          onClose={toggleDrawer}
          sx={{ [`.${drawerClasses.paper}`]: { borderRadius: 0 } }}
        >
          <DrawerContent />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

//components
const DrawerContent: React.FC = () => {
  return (
    <Stack
      sx={{ width: 200, my: 1 }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
    >
      <SideBar />
    </Stack>
  );
};

export default Header;
