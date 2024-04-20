import { useMemo } from 'react';

type SelectProps<T> = {
  value?: T;
  options: T[];
  onChange: (value: T) => void;
  getLabel?: (value: T) => string;
  getKey?: (value: T) => string;
};

const DEFAULT_GET = (value: any) => `${value}`;

const Select = <T,>(props: SelectProps<T>) => {
  const {
    value,
    options,
    onChange,
    getLabel = DEFAULT_GET,
    getKey = DEFAULT_GET,
  } = props;

  const memoOptions = useMemo(() => {
    return options.map((item) => {
      const key = getKey(item);
      const label = getLabel(item);
      return (
        <option value={key} key={key}>
          {label}
        </option>
      );
    });
  }, [options, getKey, getLabel]);
  return (
    <div>
      <select
        className="my-input"
        value={value ? getKey(value) : undefined}
        onChange={(e) => {
          const selectValue = e.target.value;
          const findItem = options.find((o) => getKey(o) === selectValue);
          if (findItem) {
            onChange(findItem);
          }
        }}
      >
        {memoOptions}
      </select>
    </div>
  );
};

export default Select;
