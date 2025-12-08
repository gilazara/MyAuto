import { useQuery } from '@tanstack/react-query';
import type {
  FilterState,
  ProductsResponse,
} from '@/features/Products/types/types';
import { getProducts } from '@/features/Products/service/products.service';

const productsKey = (filters: FilterState) => [
  'products',
  filters.Cats,
  filters.Mans,
  filters.ForRent,
  filters.PriceFrom,
  filters.PriceTo,
  filters.Period,
  filters.SortOrder,
  filters.Page,
];

export const useProducts = (filters: FilterState) => {
  const query = useQuery<ProductsResponse>({
    queryKey: productsKey(filters),
    queryFn: () => getProducts(filters),
    select: (response) => response,
  });

  return {
    products: query.data?.data.items ?? [],
    meta: query.data?.data.meta,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    refetch: query.refetch,
  };
};

export default useProducts;
