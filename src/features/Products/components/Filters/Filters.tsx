import { useState } from 'react';
import FiltersForm from './components/FiltersForm';
import type { FilterState } from '../../types/types';

const Filters = () => {
  const [filters, setFilters] = useState<FilterState>({
    Cats: '',
    Mans: '',
    ForRent: '0',
    PriceFrom: 0,
    PriceTo: 0,
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="w-full mt-[42px]">
      <div className="w-[250px]">
        <FiltersForm filters={filters} onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default Filters;
