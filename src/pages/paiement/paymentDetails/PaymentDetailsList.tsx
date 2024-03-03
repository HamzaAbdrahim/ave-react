import React from 'react';

interface PaymentDetail {
  label: string;
  value: string;
}

interface PaymentDetailsListProps {
  details: PaymentDetail[];
}

const PaymentDetailsList: React.FC<PaymentDetailsListProps> = ({ details }) => {
  return (
    <ul className="d-grid gap-3 mt-5 px-4">
      {details.map((detail, index) => (
        <li key={index} className="flex-items gap-2 flex-wrap justify-content-center justify-content-sm-between">
          <p className="fs-px_14 fw-medium ln-ht-17px clr-gray-300 ">{detail.label}</p>
          <h2 className="fs-px_16 fw-bold ln-ht-17px">{detail.value}</h2>
        </li>
      ))}
    </ul>
  );
};

export default PaymentDetailsList;
