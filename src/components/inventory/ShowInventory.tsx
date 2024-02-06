import { Button, Grid, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import React from "react";
import AddProducts from "../add-products/AddProducts";
import FilterListIcon from "@mui/icons-material/FilterList";
import { GridColDef } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProductFunc } from "../../redux/reducers/products";
import { CustomTable } from "../table";

const ShowInventory: React.FC = () => {
  //dispatch
  const dispatch = useAppDispatch();

  //columns
  const columns: GridColDef[] = [
    {
      field: "productName",
      headerName: "Products",
      flex: 0.12,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "buyingPrice",
      headerName: "Buying Price",
      renderCell: ({ row }) => (
        <Typography>
          <span>&#8377;</span> {row.buyingPrice}
        </Typography>
      ),
      flex: 0.12,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.12,
      renderCell: ({ row }) => (
        <Typography>{`${row.quantity} Packets`}</Typography>
      ),
    },
    {
      field: "thresholdValue",
      headerName: "Threshold Value",
      renderCell: ({ row }) => (
        <Typography>{`${row.thresholdValue} Packets`}</Typography>
      ),
      flex: 0.12,
      disableColumnMenu: true,
      sortable: false,
    },

    {
      field: "expiryDate",
      headerName: "Expiry Date",
      flex: 0.12,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "availability",
      headerName: "Availability",
      renderCell: ({ row }) => (
        <Typography
          sx={{
            color:
              row.availability === "In stock" ? "text.success" : "text.danger",
          }}
        >
          {row.availability}
        </Typography>
      ),
      flex: 0.12,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "_",
      headerName: "Delete",
      flex: 0.1,
      renderCell: ({ row }) => (
        <SvgIcon
          sx={{ color: "primary.main", cursor: "pointer" }}
          component={DeleteIcon}
          onClick={() => handleDelete(row.id)}
        />
      ),
      disableColumnMenu: true,
      sortable: false,
    },
  ];
  //selectors
  const { productItems } = useAppSelector((state) => state.Product);

  //functions
  const handleDelete = (id: string) => {
    dispatch(DeleteProductFunc(id));
  };
  return (
    <Paper>
      <InventoryHeader />
      <CustomTable
        autoHeight
        rows={productItems ?? []}
        loading={false}
        columns={columns}
        pageSize={5}
        pagination={true}
        // autoPageSize
        disableRowSelectionOnClick
      />
    </Paper>
  );
};

//components
const InventoryHeader = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ color: "text.dark", fontWeight: 600 }}>
            Products
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction={"row"} spacing={2} justifyContent={{ sm: "end" }}>
            <AddProducts />
            <Button startIcon={<FilterListIcon />} variant="contained">
              Filter
            </Button>
            <Button variant="contained">Download all</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowInventory;
