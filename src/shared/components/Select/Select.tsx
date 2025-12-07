import React, { useState, useRef, useEffect, useMemo, useId } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: string | undefined;
  label?: string;
  variant?: 'primary' | 'secondary';
  isClearable?: boolean;
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = '',
  error,
  label,
  variant = 'primary',
  isClearable = true,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const reactId = useId();
  const listboxId = useMemo(() => `select-listbox-${reactId}`, [reactId]);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    setIsOpen(false);
  };

  const baseButtonClasses = useMemo(
    () =>
      'w-full flex items-center justify-between px-4 py-2.5 border rounded-lg text-left transition-all duration-200',
    []
  );

  const variantButtonClasses = useMemo(() => {
    return variant === 'primary'
      ? 'bg-white text-gray-900'
      : 'bg-gray-50 text-gray-800';
  }, [variant]);

  const errorButtonClasses = useMemo(() => {
    if (error) {
      return 'border-red-500 focus:ring-2 focus:ring-red-500';
    }
    return variant === 'primary'
      ? 'border-gray-300 focus:border-black'
      : 'border-gray-200 focus:border-gray-600';
  }, [error, variant]);

  const interactivityButtonClasses = useMemo(() => {
    if (disabled) {
      return 'opacity-50 cursor-not-allowed';
    }
    return variant === 'primary'
      ? 'hover:border-black cursor-pointer'
      : 'hover:border-gray-600 cursor-pointer';
  }, [disabled, variant]);

  const selectedTextClass = useMemo(() => {
    if (selectedOption) {
      return variant === 'primary' ? 'text-gray-900' : 'text-gray-800';
    }
    return 'text-gray-500';
  }, [selectedOption, variant]);

  const chevronColorClass = useMemo(() => {
    return variant === 'primary' ? 'text-gray-400' : 'text-gray-500';
  }, [variant]);

  const dropdownContainerClasses = useMemo(() => {
    return variant === 'primary'
      ? 'bg-white border border-gray-300'
      : 'bg-gray-50 border border-gray-200';
  }, [variant]);

  const getOptionClasses = (isSelected: boolean, isHighlighted: boolean) => {
    const base =
      variant === 'primary'
        ? 'text-gray-900 hover:bg-gray-50'
        : 'text-gray-800 hover:bg-gray-100';
    const selected =
      variant === 'primary'
        ? 'font-bold bg-gray-50'
        : 'font-semibold bg-gray-100';
    const highlighted = variant === 'primary' ? 'bg-gray-100' : 'bg-gray-200';

    if (isSelected) {
      return `${selected}`;
    }
    if (isHighlighted) {
      return `${base} ${highlighted}`;
    }
    return base;
  };

  useEffect(() => {
    if (!isOpen || highlightedIndex < 0) {
      return;
    }
    const container = listboxRef.current;
    const item = container?.querySelectorAll('[role="option"]')[
      highlightedIndex
    ] as HTMLElement | undefined;
    if (container && item) {
      const itemTop = item.offsetTop;
      const itemBottom = itemTop + item.offsetHeight;
      if (itemTop < container.scrollTop) {
        container.scrollTop = itemTop;
      } else if (itemBottom > container.scrollTop + container.clientHeight) {
        container.scrollTop = itemBottom - container.clientHeight;
      }
    }
  }, [isOpen, highlightedIndex]);

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {label && (
        <label className="block text-sm text-gray-700 mb-2">{label}</label>
      )}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`${baseButtonClasses} ${variantButtonClasses} ${errorButtonClasses} ${interactivityButtonClasses}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        role="combobox"
      >
        <div className="flex items-center gap-2 flex-1 text-sm">
          <span className={selectedTextClass}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        {isClearable && selectedOption && !disabled ? (
          <button
            type="button"
            onClick={handleClear}
            className={`p-1 rounded cursor-pointer transition-colors ${chevronColorClass}`}
            aria-label="Clear selection"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <svg
            className={`w-5 h-5 ${chevronColorClass} transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto ${dropdownContainerClasses}`}
          role="listbox"
          id={listboxId}
          aria-activedescendant={
            highlightedIndex >= 0
              ? `${listboxId}-option-${highlightedIndex}`
              : undefined
          }
          ref={listboxRef}
        >
          {options.map((option, idx) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${getOptionClasses(
                option.value === value,
                idx === highlightedIndex
              )}`}
              role="option"
              id={`${listboxId}-option-${idx}`}
              aria-selected={option.value === value}
            >
              {option.icon && <span className="shrink-0">{option.icon}</span>}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
