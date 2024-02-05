interface ProductProps {
  productName: string;
  buyingPrice: number;
  quantity: number;
  thresholdValue: number;
  expiryDate: string;
  availability: "in-stock" | "out of stock";
}

export const Products: ProductProps[] = [
  {
    productName: "Maggi",
    buyingPrice: 430,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Bru",
    buyingPrice: 630,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Red Bull",
    buyingPrice: 730,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Bourn Vita",
    buyingPrice: 230,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Horlicks",
    buyingPrice: 450,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Harpick",
    buyingPrice: 437,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Airel",
    buyingPrice: 330,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Scotch Brite",
    buyingPrice: 630,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
  {
    productName: "Cocola",
    buyingPrice: 930,
    quantity: 12,
    thresholdValue: 12,
    expiryDate: "11/12/22",
    availability: "in-stock",
  },
];
