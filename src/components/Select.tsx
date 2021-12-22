
type SelectProps = {
  inputName: string;
  label: string;
  required?: boolean;
  options: any[];
  optionLabel: string;
  optionValue: string;
};

const Select = ({
  inputName,
  label,
  required,
  options,
  optionLabel,
  optionValue,
}: SelectProps) => {
  return (
    <div className="relative my-6">
      <select
        name={inputName}
        id={inputName}
        required={!!required}
        placeholder="something some"
        className="peer h-11 w-full pl-4 text-sm bg-[#F4F8FB] border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:input-border-gradient focus:border-b-2 focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option[optionValue]} value={option[optionValue]}>
            {option[optionLabel]}
          </option>
        ))}
      </select>
      <label
        htmlFor={inputName}
        className="absolute left-4 -top-0.5 text-primary text-[10px] transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-subText peer-placeholder-shown:top-3.5 peer-focus:-top-0.5 peer-focus:text-primary peer-focus:text-[10px]"
      >
        {label}
      </label>
    </div>
  );
};

export default Select;
