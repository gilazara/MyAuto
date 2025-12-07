import { api2AxiosInstance } from '@/shared/api/axiosInstance';
import type { FilterState, ProductsResponse } from '../types/types';

export const getProducts = async (
  filters: FilterState
): Promise<ProductsResponse> => {
  const params = {
    Cats: filters.Cats,
    Mans: filters.Mans,
    ForRent: filters.ForRent,
    PriceFrom: filters.PriceFrom,
    PriceTo: filters.PriceTo,
    Period: filters.Period,
    SortOrder: filters.SortOrder,
    Page: 1,
  };

  const { data } = await api2AxiosInstance.get<ProductsResponse>(
    `/ka/products`,
    { params }
  );

  return data;
};
