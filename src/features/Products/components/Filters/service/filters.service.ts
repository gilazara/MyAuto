import {
  api2AxiosInstance,
  staticMyAxiosInstance,
} from '@/shared/api/axiosInstance';
import type {
  ICategoryListResponse,
  Manufacturer,
} from '../types/filters.types';

export const fetchCategoriesList = async (): Promise<ICategoryListResponse> => {
  const { data } = await api2AxiosInstance.get<ICategoryListResponse>(
    `/ka/cats/get`
  );

  return data;
};

export const fetchManufacturersList = async (): Promise<Manufacturer[]> => {
  const { data } = await staticMyAxiosInstance.get<Manufacturer[]>(
    `/myauto/js/mans.json`
  );

  return data;
};
