import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { OverallInventoryItems } from "../../utils/data/Products";

const OverAllInventory = () => {
  return (
    <Paper>
      <Typography sx={{ color: "text.dark", fontWeight: 600, mb: 2 }}>
        Overall Inventory
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"} spacing={3}>
        {OverallInventoryItems.map((overall, ind) => {
          return (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              key={ind}
            >
              <Stack
                justifyContent={"space-between"}
                width={"100%"}
                spacing={2}
              >
                <Typography sx={{ color: overall.color, fontWeight: 600 }}>
                  {overall.title}
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  {overall.children.map((child, index) => {
                    return (
                      <Stack mr={3}>
                        <Typography color={"#5f6a7f"}>{child.value}</Typography>
                        <Typography>{child.desc}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
              {OverallInventoryItems.length - 1 !== ind && (
                <Divider
                  sx={{ width: "1px", bgcolor: "#959ea8", height: "100%" }}
                ></Divider>
              )}
            </Stack>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default OverAllInventory;
