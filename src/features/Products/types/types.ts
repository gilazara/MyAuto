export interface FilterState {
  Cats: string;
  Mans: string;
  ForRent: '0' | '1';
  PriceFrom: number;
  PriceTo: number;
  Period?: '1h' | '2h' | '3h' | '1d' | '2d' | '3d' | '1w' | '2w' | '3w';
  SortOrder?: 1 | 2 | 3 | 4 | 5 | 6;
  Page?: number;
}

export interface Product {
  id: number;
  title?: string;
  price?: number;
  image?: string;
}

export interface ProductsResponse {
  items: Product[];
}
