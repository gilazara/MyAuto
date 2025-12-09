import type { Product, ProductsMeta } from '../../types/types';
import ProductCard from './components/ProductCard';
import SortAndTimeFilters from './components/SortAndTimeFilters';
import MobileFilters from './components/MobileFilters';
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
}: Props) => (
  <>
    <MobileFilters />
    <div className="hidden lg:flex w-full justify-between items-center">
      <h3 className="text-[14px] min-w-[220px] lg:text-[16px] text-raisin-100 whitespace-nowrap relative">
        30 განცხადება
      </h3>
      <SortAndTimeFilters />
    </div>
    <div className="my-2 lg:my-6 flex flex-col gap-0 md:gap-6">
      {isLoading && <Loader />}
      {!isLoading &&
        products.map((product) => (
          <ProductCard product={product} key={product.car_id} />
        ))}
    </div>
    {meta && meta?.total > 0 && meta?.last_page && meta.last_page > 1 && (
      <div className="bg-surface mb-10 rounded-xl w-full shadow-sm p-3 max-w-3xl mx-auto font-sans">
        <Pagination meta={meta} onPageChange={onPageChange} />
      </div>
    )}
  </>
);

export default ProductList;
