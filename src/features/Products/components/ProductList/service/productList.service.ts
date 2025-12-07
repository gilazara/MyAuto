import { api2AxiosInstance } from '@/shared/api/axiosInstance';

export interface ProductModel {
  model_id: number;
  model_name: string;
}

export const fetchProductModels = async (
  manId: string | number
): Promise<ProductModel[]> => {
  const { data } = await api2AxiosInstance.get<ProductModel[]>(
    `/ka/getManModels`,
    { params: { man_id: manId } }
  );

  return data;
};
