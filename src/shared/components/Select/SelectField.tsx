import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from 'react-hook-form';
import { Select, type SelectProps } from './Select';

export interface SelectFieldProps<T extends FieldValues>
  extends Omit<SelectProps, 'value' | 'onChange' | 'error'> {
  name: Path<T>;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'> | undefined;
}

export function SelectField<T extends FieldValues>({
  name,
  control,
  rules,
  ...selectProps
}: SelectFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      {...(rules !== undefined && { rules })}
      render={({ field, fieldState: { error } }) => (
        <Select
          {...selectProps}
          value={field.value}
          onChange={field.onChange}
          error={error?.message ?? undefined}
        />
      )}
    />
  );
}
