import { useForm } from 'react-hook-form';
import { Button } from '@/shared';
import { SelectField } from '@/shared/components/Select';
import VehicleTabs from './VehicleTabs';
import useCategories from '../hooks/useCategories';
import type { Category, Manufacturer } from '../types/filters.types';
import useManufactrurs from '../hooks/useManufacturers';
import type { FilterState } from '@/features/Products/types/types';

interface Props {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

type VehicleType = 'all' | 'car' | 'moto' | 'tractor';

interface FilterFormData {
  vehicleType?: VehicleType;
  forRent?: '0' | '1';
  mans?: string;
  cats?: string;
  priceFrom?: number | '';
  priceTo?: number | '';
}

const FiltersForm = ({ filters, onFilterChange }: Props) => {
  const { categories } = useCategories();
  const { manufacturers } = useManufactrurs();

  const { control, handleSubmit, watch, setValue, register } =
    useForm<FilterFormData>({
      defaultValues: { vehicleType: 'car' },
    });

  // eslint-disable-next-line react-hooks/incompatible-library
  const vehicleType = watch('vehicleType');

  const categoryOptions =
    categories?.map((el: Category) => ({
      label: el.title,
      value: String(el.category_id),
    })) ?? [];

  const manufacturersOptions =
    manufacturers?.map((el: Manufacturer) => ({
      label: el.man_name,
      value: String(el.man_id),
    })) ?? [];

  const forRentOptions = [
    { value: '0', label: 'იყიდება' },
    { value: '1', label: 'ქირავდება' },
  ];

  const onSubmit = (data: FilterFormData) => {
    const nextFilters: FilterState = {
      Cats: data.cats ?? '',
      Mans: data.mans ?? '',
      ForRent: data.forRent ?? '0',
      PriceFrom: typeof data.priceFrom === 'number' ? data.priceFrom : 0,
      PriceTo: typeof data.priceTo === 'number' ? data.priceTo : 0,
      Period: filters?.Period ?? '1d',
      SortOrder: filters?.SortOrder ?? 1,
    };

    const params = new URLSearchParams(window.location.search);

    params.set('Cats', nextFilters.Cats);
    params.set('Mans', nextFilters.Mans);
    params.set('ForRent', String(nextFilters.ForRent));
    params.set('PriceFrom', String(nextFilters.PriceFrom));
    params.set('PriceTo', String(nextFilters.PriceTo));

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);

    onFilterChange(nextFilters);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    void handleSubmit(onSubmit)(e);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-surface rounded-lg shadow-md"
    >
      <div className="mb-6">
        <VehicleTabs
          vehicleType={vehicleType ?? 'car'}
          onVehicleTypeChange={(type) => setValue('vehicleType', type)}
        />
      </div>

      <div className="flex flex-col gap-4 px-6">
        <SelectField
          name="forRent"
          control={control}
          label="გარიგების ტიპი"
          options={forRentOptions}
          placeholder="იყიდება"
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
