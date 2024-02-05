export interface ProductProps {
  id: string;
  productName: string;
  buyingPrice: number;
  quantity: number;
  thresholdValue: number;
  expiryDate: string;
  availability: "In stock" | "Out of stock";
}
