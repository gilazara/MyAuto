import { SelectField } from '@/shared';
import type { Product } from '../../types/types';
import ProductCard from './components/ProductCard';
import { useForm } from 'react-hook-form';
import { dateFilterOptions, timeFilterOptions } from './utils';
import { useSearchParams } from 'react-router-dom';

interface Props {
  products: Product[];
}

const ProductList = ({ products = [] }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { control, setValue } = useForm<{
    Period: string | null;
    SortOrder: string | null;
  }>({
    defaultValues: {
      Period: searchParams.get('Period'),
      SortOrder: searchParams.get('SortOrder'),
    },
  });

  const handleFilterChange = (name: 'Period' | 'SortOrder', value: string) => {
    setValue(name, value);

    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-[#272A37] text-md">{products.length} განცხადება</h3>
        <div className="flex gap-2">
          <SelectField
            name="Period"
            className="w-[130px]"
            placeholder="პერიოდი"
            control={control}
            options={timeFilterOptions}
            onValueChange={(value) => handleFilterChange('Period', value)}
          />
          <SelectField
            name="SortOrder"
            placeholder="სორტირება"
            className="w-[180px]"
            control={control}
            options={dateFilterOptions}
            onValueChange={(value) => handleFilterChange('SortOrder', value)}
          />
        </div>
      </div>
      <div className="my-6 flex flex-col gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
