import { Box, Stack, SvgIcon, Typography, useTheme } from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { SIDE_BAR_BOTTOM, SIDE_BAR_TOP } from "../../utils/config";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { sideBarConfig } from "../../interfaces";

//styles
const sideBarStyles: CSSProperties = {
  padding: 3,
  height: "inherit",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: 0,
};

const sideBarWrapperStyles: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.secondary",
        ...sideBarStyles,
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: 800,
          mb: 3,
        }}
      >
        TapShelf
      </Typography>
      <Box sx={{ ...sideBarWrapperStyles }}>
        <Stack spacing={3}>
          <MapSideBars items={SIDE_BAR_TOP} />
        </Stack>
        <Stack spacing={3}>
          <MapSideBars items={SIDE_BAR_BOTTOM} />
        </Stack>
      </Box>
    </Box>
  );
};

//interfaces
interface MapSideBarsProps {
  items: sideBarConfig[];
}

//components
const MapSideBars = ({ items }: MapSideBarsProps) => {
  //paths
  const location = useLocation();
  //states
  const [whoIsActive, setWhoIsActive] = useState<string>(
    location.pathname.split("/")[1] === ""
      ? "/"
      : location.pathname.split("/")[1]
  );
  //navigate
  const navigate = useNavigate();

  //use Theme
  const { palette } = useTheme();

  //functions
  const handleNavigate = (val: string) => {
    navigate(val);
    setWhoIsActive(val);
  };
  return (
    <>
      {items.map((el, ind) => {
        const isActive = whoIsActive === el.to;
        const setColor = isActive ? palette.primary.main : "";
        return (
          <StyledStack key={ind} onClick={() => handleNavigate(el.to ?? "")}>
            <SvgIcon sx={{ color: setColor }} component={el.icon} />
            <Typography sx={{ color: setColor }}>{el.name}</Typography>
          </StyledStack>
        );
      })}
    </>
  );
};

const StyledStack = styled(Stack)(({ theme }: any) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius * 2,
  padding: 2,
  ":hover": {
    background: theme.palette.background.default,
  },
}));

export default SideBar;
