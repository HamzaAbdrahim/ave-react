import React from 'react';

type TransactionDetailsProps =  {
  amount: string;
  transactionDate: string;
  recipient: string;
  serviceOffered: string;
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  amount,
  transactionDate,
  recipient,
  serviceOffered,
}) => {
  return (
    <ul className="d-grid gap-3">
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Montant payé</p>
        <p className="fs-px_20 fw-medium ln-ht-27px flex-1">{amount}</p>
      </li>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Date de transaction</p>
        <p className="fs-px_20 fw-medium ln-ht-27px flex-1">{transactionDate}</p>
      </li>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Pour</p>
        <p className="fs-px_20 fw-medium ln-ht-27px flex-1">{recipient}</p>
      </li>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Service offert</p>
        <p className="fs-px_20 fw-medium ln-ht-27px flex-1">{serviceOffered}</p>
      </li>
    </ul>
  );
};

export default TransactionDetails;
