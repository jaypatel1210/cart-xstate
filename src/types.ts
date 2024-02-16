export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};
