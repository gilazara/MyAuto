import Breadcrumb from '@/shared/components/Breadcrumb/Breadcrumb';
import Filters from './components/Filters/Filters';
import ProductCard from './components/ProductCard/ProductCard';
import { Container } from '@/shared';

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
      <div className="mt-4">
        <Filters />
        {[].map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </Container>
  );
};
