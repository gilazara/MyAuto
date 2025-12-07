import Breadcrumb from '@/shared/components/Breadcrumb/Breadcrumb';
import { Container } from '@/shared';
import ProductList from './components/ProductList/ProductList';
import { useSearchParams } from 'react-router-dom';
import type {
  FilterState,
  Period,
  SortOrder,
} from '@/features/Products/types/types';
import { useProducts } from '@/features/Products/hooks/useProducts';
import { useMemo } from 'react';
import FiltersForm from './components/Filters/FiltersForm';

const items = [
  { label: 'მთავარი', to: '/' },
  { label: 'ძიება' },
  { label: 'იყიდება' },
];

export const Products = () => {
  const [params] = useSearchParams();

  const filters: FilterState = useMemo(() => {
    return {
      Cats: params.get('Cats'),
      Mans: params.get('Mans'),
      ForRent: params.get('ForRent'),
      PriceFrom: params.get('PriceFrom'),
      PriceTo: params.get('PriceTo'),
      Period: params.get('Period') as Period,
      SortOrder: params.get('SortOrder') as SortOrder,
    };
  }, [params]);

  const { products, isLoading } = useProducts(filters);

  return (
    <Container>
      <Breadcrumb items={items} />
      <div className="mt-[42px] flex gap-6 justify-between">
        <div className="w-[250px] shrink-0">
          <FiltersForm />
        </div>
        <div className="flex-1">
          <ProductList products={products} isLoading={isLoading} />
        </div>
      </div>
    </Container>
  );
};
