import { useQuery } from '@tanstack/react-query';
import { fetchManufacturersList } from '../service/filters.service';

const useManufactrurs = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchManufacturersList(),
    queryKey: ['useManufacturersListQuery'],
  });

  return {
    isLoading,
    manufacturers: data,
  };
};
export default useManufactrurs;
