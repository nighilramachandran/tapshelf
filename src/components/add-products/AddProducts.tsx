import React from "react";
import { useToggle } from "usehooks-ts";
import { CustomModal } from "../custom-modal/CustomModal";
import { CustomForm, CustomInputFormProps } from "../form";
import { Button } from "@mui/material";
import { ProductProps } from "../../interfaces";
import { addProductFunc } from "../../redux/reducers/products";
import { useAppDispatch } from "../../redux/hooks";

//inputs
const inputs: CustomInputFormProps[] = [
  {
    type: "text",
    name: "productName",
    label: "Product Name",
    placeholder: "Enter Product Name",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
  {
    type: "text",
    name: "id",
    label: "Product ID",
    placeholder: "Enter Product ID",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
  {
    type: "number",
    name: "buyingPrice",
    label: "Buying Price",
    placeholder: "Enter Buying Price",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
  {
    type: "number",
    name: "quantity",
    label: "Quantity",
    placeholder: "Enter Quantity",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
  {
    type: "number",
    name: "thresholdValue",
    label: "Threshold Value",
    placeholder: "Enter Threshold Value",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
  {
    type: "text",
    name: "expiryDate",
    label: "Expiry Date",
    placeholder: "Enter Expiry Date",
    validate: { required: true },
    autoComplete: "false",
    colProps: { xs: 12 },
  },
];

const AddProducts = () => {
  //toggle
  const [open, toggle] = useToggle();

  //dispatch
  const dispatch = useAppDispatch();

  //functions
  //handle toggle
  const handleClick = () => {
    toggle();
  };

  //handle add task
  const handleAddProducts = (products: ProductProps) => {
    dispatch(addProductFunc({ ...products }));
    handleClick();
  };

  return (
    <>
      <CustomModal open={open} onClose={toggle} title="New Products">
        <CustomForm
          formName="form"
          inputs={inputs}
          resetFrom
          actionCol={{ xs: 3 }}
          onSubmit={(vals) => handleAddProducts(vals)}
          cancelText="Cancel"
          onCancel={handleClick}
          submitLable={"Add Product"}
        ></CustomForm>
      </CustomModal>
      <Button variant="contained" onClick={handleClick}>
        Add Product
      </Button>
    </>
  );
};

export default AddProducts;
