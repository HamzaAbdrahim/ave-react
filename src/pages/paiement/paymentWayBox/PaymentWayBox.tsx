import React, { useState } from 'react';
import correct from '../../../assets/correct 1.png'


type PaymentWayBoxProps =  {
  paymentImageSrc: string;
}

const PaymentWayBox: React.FC<PaymentWayBoxProps> = ({  paymentImageSrc }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`paymentWay-box cursor-pointer position-relative`}
      onClick={handleClick}
    >
      {isActive ? <img src={correct} className={`green-sient position-absolute`} alt="" /> : false}
      <img src={paymentImageSrc} alt="" />
    </div>
  );
};

export default PaymentWayBox;
