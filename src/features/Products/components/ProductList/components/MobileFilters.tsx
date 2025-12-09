import { useSearchParams } from 'react-router-dom';
import { dateFilterOptions, timeFilterOptions } from '../utils';

const MobileFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterSelect = (
    filterType: 'Period' | 'SortOrder',
    value: string
  ) => {
    const params = new URLSearchParams(searchParams);
    const currentValue = searchParams.get(filterType);

    if (currentValue === value) {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }

    setSearchParams(params, { replace: true });
  };

  const handleClearFilter = (
    e: React.MouseEvent,
    filterType: 'Period' | 'SortOrder'
  ) => {
    e.stopPropagation();
    const params = new URLSearchParams(searchParams);
    params.delete(filterType);
    setSearchParams(params, { replace: true });
  };

  const currentPeriod = searchParams.get('Period');
  const currentSortOrder = searchParams.get('SortOrder');

  return (
    <div className="px-2 lg:hidden w-[300px] mb-4 overflow-hidden">
      <div className="flex gap-2 overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide -mx-4 px-4">
        {timeFilterOptions.map((option) => {
          const isSelected = currentPeriod === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleFilterSelect('Period', option.value)}
              className={`shrink-0 cursor-pointer px-4 py-2 rounded-xl bg-surface transition-all duration-200 text-sm font-medium whitespace-nowrap flex items-center gap-2`}
            >
              <span>{option.label}</span>
              {isSelected && (
                <span
                  onClick={(e) => handleClearFilter(e, 'Period')}
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-surface-muted transition-colors"
                  aria-label="Clear filter"
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
                </span>
              )}
            </button>
          );
        })}

        <div className="shrink-0 w-px bg-border self-stretch my-1" />
        {dateFilterOptions.map((option) => {
          const isSelected = currentSortOrder === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleFilterSelect('SortOrder', option.value)}
              className={`shrink-0 cursor-pointer px-4 py-2 rounded-xl bg-surface border transition-all duration-200 text-sm font-medium whitespace-nowrap flex items-center gap-2`}
            >
              <span>{option.label}</span>
              {isSelected && (
                <span
                  onClick={(e) => handleClearFilter(e, 'SortOrder')}
                  className="inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-surface-muted transition-colors"
                  aria-label="Clear filter"
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
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFilters;
