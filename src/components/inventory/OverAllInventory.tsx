import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { OverallInventoryItems } from "../../utils/data/Products";

const OverAllInventory = () => {
  return (
    <Paper>
      <Typography sx={{ color: "text.dark", fontWeight: 600, mb: 2 }}>
        Overall Inventory
      </Typography>
      <Grid container spacing={3}>
        {OverallInventoryItems.map((overall, ind) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={ind}>
              <Stack spacing={2}>
                <Typography sx={{ color: overall.color, fontWeight: 600 }}>
                  {overall.title}
                </Typography>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  {overall.children.map((child) => {
                    return (
                      <Stack>
                        <Typography>{child.value}</Typography>
                        <Typography>{child.desc}</Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default OverAllInventory;
