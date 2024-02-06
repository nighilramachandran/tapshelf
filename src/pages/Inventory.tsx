import { Stack } from "@mui/material";
import ShowInventory from "../components/inventory/ShowInventory";
import OverAllInventory from "../components/inventory/OverAllInventory";
const Inventory = () => {
  return (
    <Stack spacing={3}>
      <OverAllInventory />
      <ShowInventory />
    </Stack>
  );
};

export default Inventory;
