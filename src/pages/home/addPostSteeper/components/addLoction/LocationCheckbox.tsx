import React from "react";
import Checkbox from "../../../../../components/commen/ui/Checkbox";


interface LocationCheckboxProps {
  label: string;
  address: string;
}
const LocationCheckbox: React.FC<LocationCheckboxProps> = React.memo(
  ({ label, address }) => {
    const handleCheckboxChange = (checked: boolean) => {
      console.log('Checkbox checked:', checked);
    };

    return (
      <div className="flex-items my-3 gap-3">
        <Checkbox onChange={handleCheckboxChange} />
        <p className='fw-bold fs-px-16 ln-ht-17px'>
          {label} <br />
          <span className='clr-gray-300 fw-medium sp-letter-05'>{address}</span>
        </p>
      </div>
    );
  }
);

export default LocationCheckbox;
