import type { Product } from '../../types/types';
import ProductCard from './components/ProductCard/ProductCard';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="w-full">
      <h3 className="text-[#272A37] text-md">13232 განცხადება</h3>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
