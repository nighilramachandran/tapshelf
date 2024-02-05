import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { CustomTable } from "../components/table";
import { GridColDef } from "@mui/x-data-grid";

const Inventory = () => {
  //columns
  const columns: GridColDef[] = [
    {
      field: "Products",
      headerName: "Products",
      flex: 0.1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "Buying Price",
      headerName: "Buying Price",
      flex: 0.1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "Quantity",
      headerName: "Quantity",
      flex: 0.1,
      // renderCell: ({ row }) => (
      //   <Typography>{moment(row.dueDate).format("DD-MM-YYYY")}</Typography>
      // ),
    },
    {
      field: "Threshold Value",
      headerName: "Threshold Value",
      flex: 0.1,
      // renderCell: ({ row }) => (
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
      field: "Expiry Date",
      headerName: "Expiry Date",
      flex: 0.1,
      // renderCell: ({ row }) => (
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
      field: "Availability",
      headerName: "Availability",
      flex: 0.1,
      // renderCell: ({ row }) => (
      //   <SvgIcon
      //     sx={{ color: "primary.main", cursor: "pointer" }}
      //     component={DeleteIcon}
      //     onClick={() => handleDelete(row.id)}
      //   />
      // ),
      disableColumnMenu: true,
      sortable: false,
    },
  ];
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
          rows={[]}
          loading={false}
          columns={columns}
          disableRowSelectionOnClick
        />
      </Paper>
    </Stack>
  );
};

export default Inventory;
