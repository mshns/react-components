export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ICard {
  title: string;
  description: string;
  price: number;
  discount: number;
  brand: string;
  category: string;
  thumbnail: string;
}
