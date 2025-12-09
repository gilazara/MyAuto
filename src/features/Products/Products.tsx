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
  const [params, setParams] = useSearchParams();

  const filters: FilterState = useMemo(() => {
    return {
      Cats: params.get('Cats'),
      Mans: params.get('Mans'),
      ForRent: params.get('ForRent'),
      PriceFrom: params.get('PriceFrom'),
      PriceTo: params.get('PriceTo'),
      Period: params.get('Period') as Period,
      SortOrder: params.get('SortOrder') as SortOrder,
      Page: params.get('Page') ? Number(params.get('Page')) : 1,
    };
  }, [params]);

  const { products, meta, isLoading } = useProducts(filters);

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(params);
    newParams.set('Page', page.toString());
    setParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Breadcrumb items={items} />
      <div className="mt-4 md:mt-[42px] flex gap-6 justify-between">
        <div className="w-[250px] shrink-0 hidden lg:block">
          <FiltersForm />
        </div>
        <div className="flex-1">
          <ProductList
            products={products}
            meta={meta}
            isLoading={isLoading}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Container>
  );
};
