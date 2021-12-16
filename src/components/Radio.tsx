type RadioProps = {
  radioName: string;
  options: {optionLabel: string, optionValue: any}[]
};

const Radio = ({ radioName, options}: RadioProps) => {
  return (
    <div className="block">
      <div className="mt-2">
        {
          options.map(({optionLabel, optionValue}) => (
            <div key={optionValue} className="hover:shadow-lg py-6 px-4">
            <label className="inline-flex items-center">
              <input
                className="form-radio bg-green-500"
                type="radio"
                name={radioName}
                value={optionValue}
              />
              <span className="ml-2 font-semibold">{optionLabel}</span>
            </label>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Radio;
