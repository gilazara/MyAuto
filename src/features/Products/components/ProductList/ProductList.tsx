import type { Product } from '../../types/types';
import ProductCard from './components/ProductCard';
import SortAndTimeFilters from './components/SortAndTimeFilters';
import { Loader } from '@/shared';

interface Props {
  products: Product[];
  isLoading: boolean;
}

const ProductList = ({ products = [], isLoading }: Props) => {
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
    </div>
  );
};

export default ProductList;
