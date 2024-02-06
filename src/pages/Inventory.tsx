import { Button, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import { CustomTable } from "../components/table";
import { GridColDef } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddProducts from "../components/add-products/AddProducts";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProductFunc } from "../redux/reducers/products";
const Inventory = () => {
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
      //   <>
      //     <DetailView
      //       data={[
      //         { name: "Title", value: row.title },
      //         { name: "Description", value: row.description },
      //         {
      //           name: "Due Date",
      //           value: moment(row.dueDate).format("DD-MM-YYYY"),
      //         },
      //         {
      //           name: "Status",
      //           value: row.isCompleted ? "Completed" : "Pending",
      //         },
      //       ]}
      //     />
      //   </>
      // ),
      disableColumnMenu: true,
      sortable: false,
    },

    {
      field: "expiryDate",
      headerName: "Expiry Date",
      flex: 0.122,
      //   <EditForm
      //     data={{
      //       id: row.id,
      //       title: row.title,
      //       description: row.description,
      //       dueDate: row.dueDate,
      //     }}
      //   />
      // ),
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
    <Stack spacing={3}>
      <Paper>
        <Typography sx={{ color: "text.dark", fontWeight: 600 }}>
          Overall Inventory
        </Typography>
      </Paper>
      <Paper>
        <GridHeader />
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
    </Stack>
  );
};

//components
const GridHeader = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography sx={{ color: "text.dark", fontWeight: 600 }}>
        Products
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <AddProducts />

        <Button startIcon={<FilterListIcon />} variant="contained">
          Filter
        </Button>
        <Button variant="contained">Download all</Button>
      </Stack>
    </Stack>
  );
};

export default Inventory;
