import React, { useState, useRef, useEffect, useId } from 'react';

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
  error?: string;
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
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const listboxId = `select-listbox-${useId()}`;
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

  const getOptionClasses = (isSelected: boolean, isHighlighted: boolean) => {
    if (isSelected) {
      return 'font-bold bg-surface-muted';
    }
    if (isHighlighted) {
      return 'text-text hover:bg-surface-muted bg-surface-muted';
    }
    return 'text-text hover:bg-surface-muted';
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

  const buttonClasses = `w-full flex items-center justify-between px-4 py-2.5 border rounded-lg text-left transition-all duration-200 bg-surface text-text border-border relative ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${
    variant === 'primary' && !disabled
      ? 'focus:border-text hover:border-raisin-100'
      : ''
  }`;

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {label && <label className="block text-sm text-text mb-2">{label}</label>}
      <div
        className={buttonClasses}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
      >
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label={selectedOption ? selectedOption.label : placeholder}
        />
        <div className="flex items-center gap-2 flex-1 text-sm pointer-events-none">
          <span className={selectedOption ? 'text-text' : 'text-text-muted'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        {isClearable && selectedOption && !disabled ? (
          <button
            type="button"
            onClick={handleClear}
            className="p-1.5 rounded cursor-pointer transition-colors text-text-muted relative z-10"
            aria-label="Clear selection"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            className={`w-6 h-6 text-text-muted transition-transform duration-200 pointer-events-none ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="m15 11-3 3-3-3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {isOpen && (
        <div
          className="absolute z-50 w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto bg-surface border border-border"
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
              className={`w-full cursor-pointer flex items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${getOptionClasses(
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

      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};
