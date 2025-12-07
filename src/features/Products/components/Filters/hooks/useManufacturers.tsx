import { useQuery } from '@tanstack/react-query';
import { fetchManufacturersList } from '../service/filters.service';
// import type { Manufacturer } from '../types/filters.types';

const useManufactrurs = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchManufacturersList(),
    queryKey: ['useManufacturersListQuery'],
  });

  const map: Record<string | number, string> = {};
  data?.forEach((item) => (map[item.man_id] = item.man_name));

  return {
    map,
    isLoading,
    manufacturers: data,
  };
};
export default useManufactrurs;
