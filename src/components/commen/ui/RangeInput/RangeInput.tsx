import React, { ChangeEvent, useState } from 'react';
import styles from './RangeInput.module.css'; // If you're using CSS modules

interface RangeInputProps {
  label: string;
  min?: number;
  max?: number;
  step?: number;
}

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [value, setValue] = useState(min);

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className={`${styles.rangeInputContainer} mt-3 text-center animate__animated animate__slideInDown mx-auto `}>
      <label className='fw-medium fs-px_18 ln-ht-17px' htmlFor="rangeInput">{label}</label> <br />
      <input
        type="range"
        id="rangeInput"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleRangeChange}
        className={styles.progress}
      /> {"   "}
      <span className='fw-medium fs-px_18 ln-ht-17px'>{value}</span>
    </div>
  );
};

export default RangeInput;
