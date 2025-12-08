export interface Category {
  category_id: number;
  category_type: number;
  has_icon: number;
  seo_title: string;
  title: string;
  vehicle_types: number[];
}

export interface ICategoryListResponse {
  data: Category[];
}

export interface Manufacturer {
  man_id: number;
  man_name: string;
  is_car: number;
  is_spec: number;
  is_moto: number;
}

export type VehicleType = 'all' | 'car' | 'moto' | 'tractor';
