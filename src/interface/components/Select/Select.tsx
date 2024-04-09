import { useEffect, useState } from 'react';

export interface SelectOption {
  text: string;
  value: string | number;
}

interface Props {
  name: string;
  label?: string;
  defaultInputValue?: string | number;
  defaultSelectValue?: string;
  options: SelectOption[];
  onOptionSelect: (value: string | number) => void;
  onInputChange: (value: string | number) => void;
}

export const Select: React.FC<Props> = ({
  name,
  label,
  defaultInputValue,
  defaultSelectValue,
  options,
  onOptionSelect,
  onInputChange,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>();

  useEffect(() => {
    if (defaultSelectValue) {
      const defaultItem = options.find(({ value }) => {
        return value === defaultSelectValue;
      })!;
      setSelectedOption(defaultItem);
    }
  }, [defaultSelectValue]);

  const handleSelect = (value: string | number) => {
    setSelectedOption({ text: value.toString(), value });
    onOptionSelect(value);
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="number"
        value={defaultInputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <select
        value={selectedOption?.value}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {options.map(({ text, value }: SelectOption, index) => (
          <option key={index} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};
