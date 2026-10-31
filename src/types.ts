export interface Product {
  id: string;
  name: string;
  flavor: string;
  tagline: string;
  price: number;
  weight: string;
  color: string; // pouch primary hex
  textColor: string;
  accentColor: string;
  badge?: string;
  description: string;
  ingredients: string[];
  nutrition: {
    protein: string;
    b12: string;
    calories: string;
    sugar: string;
  };
  pairsWith: string[];
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  packType: 'single' | 'bundle3' | 'party6';
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  flavorBought: string;
  date: string;
  verified: boolean;
}
