type SelectProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = (props) => {
  const { value, options, onChange } = props;
  return (
    <div>
      <select
        className="my-input"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {options.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
