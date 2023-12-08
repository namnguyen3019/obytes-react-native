export type Product = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[]; // Assuming that images is an array of strings representing URLs
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};
