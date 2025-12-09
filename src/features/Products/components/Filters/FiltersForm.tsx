import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Button, Input } from '@/shared';
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
      className="bg-surface rounded-md shadow-md"
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

      <hr className="my-6 border-t border-border" />

      <div className="my-6 px-6">
        <label className="block text-sm text-text mb-2">ფასი</label>
        <div className="flex gap-2 items-center">
          <Input
            type="number"
            placeholder="დან"
            min="0"
            {...register('priceFrom', {
              valueAsNumber: true,
              setValueAs: (value) => {
                const num = Number(value);
                return isNaN(num) || num < 0 ? undefined : num;
              },
            })}
            onInput={(e) => {
              const input = e.currentTarget;
              if (input.value && Number(input.value) < 0) {
                input.value = '';
              }
            }}
          />
          <span className="text-text">-</span>
          <Input
            type="number"
            placeholder="მდე"
            min="0"
            {...register('priceTo', {
              valueAsNumber: true,
              setValueAs: (value) => {
                const num = Number(value);
                return isNaN(num) || num < 0 ? undefined : num;
              },
            })}
            onInput={(e) => {
              const input = e.currentTarget;
              if (input.value && Number(input.value) < 0) {
                input.value = '';
              }
            }}
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
