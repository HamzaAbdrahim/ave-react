import React from 'react';

type CardDetailsProps = {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({ cardNumber, cardHolderName, expiryDate, cvv }) => {
  return (
    <ul className="d-grid gap-3">
      <h4 className="fs-px-22 fw-bold ln-ht-28px mb-3 mt-4 clr-blue-gray">Détail de carte</h4>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Numéro de carte</p>
        <p className="fs-px_16 fw-bold ln-ht-27px flex-1">{cardNumber}</p>
      </li>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Nom sur la carte</p>
        <p className="fs-px_16 fw-bold ln-ht-27px flex-1">{cardHolderName}</p>
      </li>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Date de validité</p>
        <p className="fs-px_16 fw-bold ln-ht-27px flex-1">{expiryDate}</p>
      </li>
      <li className="flex-items gap-1">
        <p className="fw-normal fs-px_14 ln-ht-17px flex-1">CVV</p>
        <p className="fs-px_16 fw-bold ln-ht-27px flex-1">{cvv}</p>
      </li>
    </ul>
  );
};

export default CardDetails;
