import {
  AppBar,
  Avatar,
  Stack,
  SvgIcon,
  TextField,
  Toolbar,
} from "@mui/material";
import React from "react";
import { HEADER_SPACINGS } from "../../utils/config";
import { useAppDispatch } from "../../redux/hooks";
import { searchProductFunc } from "../../redux/reducers/products";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header: React.FC = () => {
  //dispatch
  const dispatch = useAppDispatch();

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
          justifyContent={"space-between"}
          width={"100%"}
        >
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
