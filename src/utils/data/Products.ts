import { OverallInventoryProps, ProductProps } from "../../interfaces";

export const ProductsItems: ProductProps[] = [
  {
    id: "0",
    productName: "Maggi",
    buyingPrice: 430,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "In stock",
  },
  {
    id: "1",
    productName: "Bru",
    buyingPrice: 630,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "Out of stock",
  },
  {
    id: "2",
    productName: "Red Bull",
    buyingPrice: 730,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "In stock",
  },
  {
    id: "3",
    productName: "Bourn Vita",
    buyingPrice: 230,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "Out of stock",
  },
  {
    id: "4",
    productName: "Horlicks",
    buyingPrice: 450,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "In stock",
  },
  {
    id: "5",
    productName: "Harpick",
    buyingPrice: 437,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "In stock",
  },
  {
    id: "6",
    productName: "Airel",
    buyingPrice: 330,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "Out of stock",
  },
  {
    id: "7",
    productName: "Scotch Brite",
    buyingPrice: 630,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "In stock",
  },
  {
    id: "8",
    productName: "Cocola",
    buyingPrice: 930,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "Out of stock",
  },
];

export const OverallInventoryItems: OverallInventoryProps[] = [
  {
    title: "Category",
    color: "#0067ee",
    children: [{ value: "14", desc: "last 7 days" }],
  },
  {
    title: "Total Products",
    color: "#e08908",
    children: [
      { value: "868", desc: "last 7 days" },
      { value: "25000", desc: "Revenue" },
    ],
  },
  {
    title: "Top Selling",
    color: "#865dbe",
    children: [
      { value: "5", desc: "last 7 days" },
      { value: "2500", desc: "Cost" },
    ],
  },
  {
    title: "Low Stocks",
    color: "#f46b60",
    children: [
      { value: "12", desc: "Ordered" },
      { value: "2", desc: "Not in stock" },
    ],
  },
];
