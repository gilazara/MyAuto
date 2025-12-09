import { SelectField } from '@/shared';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { dateFilterOptions, timeFilterOptions } from '../utils';

const SortAndTimeFilters = () => {
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
        className="min-w-[170px]"
        control={control}
        options={dateFilterOptions}
        onValueChange={(value) => handleFilterChange('SortOrder', value)}
      />
    </div>
  );
};

export default SortAndTimeFilters;
