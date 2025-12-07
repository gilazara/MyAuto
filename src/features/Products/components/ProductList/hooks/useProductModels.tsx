import { useQuery } from '@tanstack/react-query';
import {
  fetchProductModels,
  type ProductModel,
} from '../service/productList.service';

const useProductModels = (manId: string | number) => {
  const { data, isLoading, error } = useQuery<ProductModel[]>({
    queryFn: () => fetchProductModels(manId),
    queryKey: ['useProductModels', manId],
  });

  return {
    isLoading,
    error,
    models: data ?? [],
  };
};
export default useProductModels;
