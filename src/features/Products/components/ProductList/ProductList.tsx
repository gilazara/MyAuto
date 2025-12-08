import type { Product, ProductsMeta } from '../../types/types';
import ProductCard from './components/ProductCard';
import SortAndTimeFilters from './components/SortAndTimeFilters';
import { Loader, Pagination } from '@/shared';

interface Props {
  products: Product[];
  meta: ProductsMeta | undefined;
  isLoading: boolean;
  onPageChange: (page: number) => void;
}

const ProductList = ({
  products = [],
  meta,
  isLoading,
  onPageChange,
}: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-[#272A37] text-md">{products.length} განცხადება</h3>
        <SortAndTimeFilters />
      </div>
      <div className="my-6 flex flex-col gap-6">
        {isLoading && <Loader />}
        {!isLoading &&
          products.map((product) => (
            <ProductCard
              product={product}
              key={product.daily_views?.product_id}
            />
          ))}
      </div>
      {products.length > 0 && (
        <div className="bg-white mb-10 rounded-xl w-full shadow-sm p-3 max-w-3xl mx-auto font-sans">
          <Pagination meta={meta} onPageChange={onPageChange} />
        </div>
      )}
    </div>
  );
};

export default ProductList;
