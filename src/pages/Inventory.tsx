import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { CustomTable } from "../components/table";
import { GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "../redux/hooks";

const Inventory = () => {
  //columns
  const columns: GridColDef[] = [
    {
      field: "productName",
      headerName: "Products",
      flex: 0.1,
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
      flex: 0.1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 0.1,
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
      flex: 0.1,
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
      flex: 0.1,
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
      flex: 0.1,
      disableColumnMenu: true,
      sortable: false,
    },
  ];
  //selectors
  const { productItems } = useAppSelector((state) => state.Product);

  return (
    <Stack spacing={3}>
      <Paper>
        <Typography sx={{ color: "text.dark", fontWeight: 600 }}>
          Overall Inventory
        </Typography>
      </Paper>
      <Paper>
        <Typography sx={{ color: "text.dark", fontWeight: 600 }}>
          Products
        </Typography>
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

export default Inventory;
