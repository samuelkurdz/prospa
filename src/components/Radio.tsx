const Radio = () => {
  return (
    <div className="block">
      <span className="text-gray-700">Radio Buttons</span>
      <div className="mt-2">
        <div>
          <label className="inline-flex items-center">
            <input
              className="form-radio"
              type="radio"
              checked
              name="radio-direct"
              value="1"
            />
            <span className="ml-2">Option 1</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              className="form-radio"
              type="radio"
              name="radio-direct"
              value="2"
            />
            <span className="ml-2">Option 2</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              className="form-radio"
              type="radio"
              name="radio-direct"
              value="3"
            />
            <span className="ml-2">Option 3</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Radio;
