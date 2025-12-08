import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/shared';
import { SelectField } from '@/shared/components/Select';
import { transformForSelect } from '@/utils/utils';
import VehicleTabs from './components/VehicleTabs';
import useCategories from './hooks/useCategories';
import useManufactrurs from './hooks/useManufacturers';

const forRentOptions = [
  { value: '0', label: 'იყიდება' },
  { value: '1', label: 'ქირავდება' },
];

interface FilterFormData {
  forRent?: string | undefined;
  mans?: string | undefined;
  cats?: string | undefined;
  priceFrom?: number | '' | undefined;
  priceTo?: number | '' | undefined;
}

const FiltersForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { categories } = useCategories();
  const { manufacturers } = useManufactrurs();

  const defaultPriceToStr = searchParams.get('PriceTo');
  const defaultPriceFromStr = searchParams.get('PriceFrom');

  const defaultValues: FilterFormData = {
    forRent: searchParams.get('ForRent') ?? undefined,
    mans: searchParams.get('Mans') ?? undefined,
    cats: searchParams.get('Cats') ?? undefined,
    priceFrom:
      defaultPriceFromStr && !Number.isNaN(Number(defaultPriceFromStr))
        ? Number(searchParams.get('PriceFrom'))
        : undefined,
    priceTo:
      defaultPriceToStr && !Number.isNaN(Number(defaultPriceToStr))
        ? Number(defaultPriceToStr)
        : undefined,
  };

  const { control, handleSubmit, register } = useForm<FilterFormData>({
    defaultValues,
  });

  const categoryOptions = transformForSelect(
    categories,
    'title',
    'category_id'
  );

  const manufacturersOptions = transformForSelect(
    manufacturers,
    'man_name',
    'man_id'
  );

  const onSubmit = (data: FilterFormData) => {
    const params = new URLSearchParams(searchParams);

    if (data.cats) {
      params.set('Cats', data.cats);
    } else {
      params.delete('Cats');
    }

    if (data.mans) {
      params.set('Mans', data.mans);
    } else {
      params.delete('Mans');
    }

    if (data.forRent) {
      params.set('ForRent', data.forRent);
    } else {
      params.delete('ForRent');
    }

    if (typeof data.priceFrom === 'number' && data.priceFrom > 0) {
      params.set('PriceFrom', String(data.priceFrom));
    } else {
      params.delete('PriceFrom');
    }

    if (typeof data.priceTo === 'number' && data.priceTo > 0) {
      params.set('PriceTo', String(data.priceTo));
    } else {
      params.delete('PriceTo');
    }

    setSearchParams(params, { replace: true });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    void handleSubmit(onSubmit)(e);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-surface rounded-lg shadow-md"
    >
      <VehicleTabs />

      <div className="flex flex-col gap-4 px-6">
        <SelectField
          name="forRent"
          control={control}
          label="გარიგების ტიპი"
          options={forRentOptions}
          placeholder="აირჩიე ტიპი"
        />
        <SelectField
          name="mans"
          control={control}
          label="მწარმოებელი"
          options={manufacturersOptions}
          placeholder="ყველა მწარმოებელი"
        />
        <SelectField
          name="cats"
          control={control}
          label="კატეგორია"
          options={categoryOptions}
          placeholder="ყველა კატეგორია"
        />
      </div>

      <div className="my-6 px-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          ფასი
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="დან"
            {...register('priceFrom', { valueAsNumber: true })}
            className="w-1/2 px-3 py-2.5 border border-gray-300 rounded-lg hover:border-black focus:outline-none focus:border-black transition-all"
          />
          <input
            type="number"
            placeholder="მდე"
            {...register('priceTo', { valueAsNumber: true })}
            className="w-1/2 px-3 py-2.5 border border-gray-300 hover:border-black rounded-lg focus:border-black focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="pb-6 px-6">
        <Button variant="primary" size="md" fullWidth type="submit">
          ძებნა
        </Button>
      </div>
    </form>
  );
};

export default FiltersForm;
