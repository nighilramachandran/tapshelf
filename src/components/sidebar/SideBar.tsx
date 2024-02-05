import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { SIDE_BAR_BOTTOM, SIDE_BAR_TOP } from "../../utils/config";
import styled from "@emotion/styled";

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
          {SIDE_BAR_TOP.map((el, ind) => {
            return (
              <StyledStack key={ind}>
                <SvgIcon component={el.icon} />
                <Typography>{el.name}</Typography>
              </StyledStack>
            );
          })}
        </Stack>
        <Stack spacing={3}>
          {SIDE_BAR_BOTTOM.map((el, ind) => {
            return (
              <StyledStack key={ind}>
                <SvgIcon component={el.icon} />
                <Typography>{el.name}</Typography>
              </StyledStack>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

//components
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
