import { useQuery } from '@tanstack/react-query';
import type { FilterState, Product } from '@/features/Products/types/types';
import { getProducts } from '@/features/Products/service/products.service';

const productsKey = (filters: FilterState) => [
  'products',
  filters.Cats,
  filters.Mans,
  filters.ForRent,
  filters.PriceFrom,
  filters.PriceTo,
  filters.Period ?? '1d',
  filters.SortOrder ?? 1,
];

export const useProducts = (filters: FilterState) => {
  const query = useQuery<Product[]>({
    queryKey: productsKey(filters),
    queryFn: () => getProducts(filters),
    select: (data) => data ?? [],
  });

  return {
    products: query.data ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
};

export default useProducts;
