import Breadcrumb from '@/shared/components/Breadcrumb/Breadcrumb';
import Filters from './components/Filters/Filters';
import { Container } from '@/shared';
import ProductList from './components/ProductList/ProductList';

export const Products = () => {
  return (
    <Container>
      <Breadcrumb
        items={[
          { label: 'მთავარი', to: '/' },
          { label: 'ძიება' },
          { label: 'იყიდება' },
        ]}
      />
      <div className="mt-[42px] flex gap-6 justify-between">
        <div className="w-[250px] shrink-0">
          <Filters />
        </div>
        <div className="flex-1">
          <ProductList products={[]} />
        </div>
      </div>
    </Container>
  );
};
