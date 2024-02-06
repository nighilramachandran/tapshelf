import {
  AppBar,
  Avatar,
  Stack,
  SvgIcon,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { HEADER_SPACINGS } from "../../utils/config";
import { useAppDispatch } from "../../redux/hooks";
import { searchProductFunc } from "../../redux/reducers/products";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
const Header: React.FC = () => {
  //states
  const [isInventory, setIsInvetory] = useState<boolean>();

  const location = useLocation();
  //dispatch
  const dispatch = useAppDispatch();

  //useEffects
  useEffect(() => {
    setIsInvetory(location.pathname.split("/")[1] === "" ? true : false);
  }, [location]);

  //functions
  const handelSearch = (value: string) => {
    dispatch(searchProductFunc(value));
  };
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
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={isInventory ? "space-between" : "end"}
          width={"100%"}
        >
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
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <SvgIcon component={NotificationsIcon} />
            <Avatar src="/assets/images/avatar.jpg"></Avatar>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
