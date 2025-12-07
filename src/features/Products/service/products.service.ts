import { api2AxiosInstance } from '@/shared/api/axiosInstance';
import type { FilterState, Product, ProductsResponse } from '../types/types';

export const getProducts = async (filters: FilterState): Promise<Product[]> => {
  const params = {
    Cats: filters.Cats || '',
    Mans: filters.Mans || '',
    ForRent: filters.ForRent || '0',
    PriceFrom: filters.PriceFrom ?? 0,
    PriceTo: filters.PriceTo ?? 0,
    Period: filters.Period ?? '1d',
    SortOrder: filters.SortOrder ?? 1,
    Page: 1,
    Size: 5,
  };

  const { data } = await api2AxiosInstance.get<ProductsResponse>(
    `/ka/products`,
    { params }
  );

  return Array.isArray(data.items) ? data.items : [];
};
