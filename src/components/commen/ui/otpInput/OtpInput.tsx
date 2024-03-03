import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OtpInput.css'; // Create a CSS file for styling if needed

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRefs = Array.from({ length }, () => useRef<HTMLInputElement>(null));

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

     // Move focus to the next input if available
     if (index < length - 1 && value !== '') {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs[index - 1]?.current?.focus();
    }
  };
  

  useEffect(() => {
    // Set focus on the first input when the component mounts
    inputRefs[0]?.current?.focus();
  }, []);

  return (
    <div className="otp-input-container col-md-8 mx-auto my-3">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="form-control otp-input display-1"
        />
      ))}
    </div>
  );
};

export default OtpInput;


