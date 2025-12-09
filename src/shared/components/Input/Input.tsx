import { type InputHTMLAttributes, type Ref } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  fullWidth?: boolean;
  ref?: Ref<HTMLInputElement>;
}

const Input = ({
  placeholder,
  type = 'text',
  value,
  defaultValue,
  fullWidth = false,
  className,
  ref,
  ...props
}: InputProps) => {
  const widthClass = fullWidth ? 'w-full' : 'w-1/2';
  const baseClassName = `${widthClass} px-3 text-sm py-2.5 border border-border rounded-lg hover:border-raisin-100 focus:outline-none focus:border-text transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-surface text-text`;
  const finalClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      {...props}
      className={finalClassName}
    />
  );
};

export default Input;
