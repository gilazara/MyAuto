import { useQuery } from '@tanstack/react-query';
import { fetchCategoriesList } from '../service/filters.service';

const useCategoriesList = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchCategoriesList(),
    queryKey: ['useCategoryListQuery'],
  });

  return {
    isLoading,
    categories: data?.data || [],
  };
};
export default useCategoriesList;
