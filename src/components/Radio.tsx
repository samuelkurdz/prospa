import { useState } from "react";
import { ReactComponent as Check } from '../assets/check.svg';

type RadioProps = {
  radioName: string;
  options: {
    optionLabel: string;
    optionValue: any,
    optionDetailHeader?: string,
    optionDetail?: string[]
  }[];
};

const Radio = ({ radioName, options }: RadioProps) => {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className="block">
      <div className="mt-2 space-y-4">
        {options.map(({ optionLabel, optionValue, optionDetailHeader, optionDetail }) => (
          <div
            key={optionValue}
            className={`py-6 px-4 rounded-md transition-all ${
              selected === optionValue ? "border-2 border-primary" : "border-2 border-transparent hover:shadow-md"
            }`}
            onClick={() => setSelected(optionValue)}
          >
            <div className="flex gap-3 items-start">
              <div
                className={`w-5 h-5 flex-none rounded-full ${
                  selected === optionValue
                    ? "border-0 bg-primary"
                    : "border-2 border-gray-400"
                }`}
              />
              <div>
                <h3 className="font-semibold text-sm">{optionLabel}</h3>
                <div className={`text-subText text-xs ${selected === optionValue ? '' : 'hidden'}`}>
                  <p>{optionDetailHeader}</p>
                  <div className="space-y-2 mt-5">
                    {
                      optionDetail?.map(detail => (
                        <div className="flex gap-3 items-center" key={detail}>
                          <Check />
                          <p>{detail}</p>
                        </div>
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
