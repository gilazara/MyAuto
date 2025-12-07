export type Period =
  | '1h'
  | '2h'
  | '3h'
  | '1d'
  | '2d'
  | '3d'
  | '1w'
  | '2w'
  | '3w';
export type SortOrder = '1' | '2' | '3' | '4' | '5' | '6';

export interface FilterState {
  Cats?: string | null;
  Mans?: string | null;
  ForRent?: string | null;
  PriceFrom?: string | null;
  PriceTo?: string | null;
  Period?: Period | null;
  SortOrder?: SortOrder | null;
  Page?: number;
}

export interface Product {
  id: number;
  title?: string;
  price?: number;
  image?: string;
}

export interface ProductsMeta {
  total: number;
  current_page?: number;
  last_page?: number;
  per_page?: number;
}

export interface ProductsResponse {
  data: { items: Product[]; meta?: ProductsMeta };
}
