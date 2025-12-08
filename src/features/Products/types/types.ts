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
  photo: string;
  photo_ver: string;
  daily_views: { product_id: number; views: number };
  pic_number: number;
  customs_passed: boolean;
  man_id: string;
  model_id?: number;
  prod_year: number;
  engine_volume: number;
  fuel_type_id: number;
  car_run_km: number;
  gear_type_id: number;
  right_wheel: boolean;
  price: number;
  price_usd?: number;
  car_id: number;
  order_date: string;
  product_id: number;
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

export const Currency = {
  USD: 'USD',
  GEL: 'GEL',
} as const;

export type Currency = (typeof Currency)[keyof typeof Currency];
