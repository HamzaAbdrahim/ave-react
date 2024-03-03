import React from 'react';
import { Link } from 'react-router-dom'; // Adjust the import based on your routing library
import moneyHand from '../../../assets/money-hand.png';
import cardHand from '../../../assets/card-hand.png';

interface PaymentBoxProps {
  serviceName: string;
  personName: string;
  amount: string;
  date: string;
}

const PaymentBox: React.FC<PaymentBoxProps> = ({serviceName, personName, amount, date }) => {
  return (
    <div className='payment__box d-grid bg-white'>
      <div className='flex-items flex-column justify-content-center flex-sm-row gap-3'>
        <img src={moneyHand} alt="" />
        <div className='flex-1'>
          <h3 className='fs-px_16 ln-ht-20px fw-medium mb-1 text-center text-md-start'>Paiement</h3>
          <p className='fs-px_14 fw-bold ln-ht-17px clr-gray-300 text-center text-md-start'>
            Service de chez{' '}
            <Link to={''} className='text-decoration-underline'>
              {serviceName}
            </Link>
          </p>
        </div>
        <div className='text-center'>
          <h3 className='fw-bold ln-ht-27px fs-px_20 mb-1' style={{ color:'#EC6060'}}>
            {amount}
          </h3>
          <p className='fw-medium clr-gray-300 fs-px_14 ln-ht-17px'>{date}</p>
        </div>
      </div>
      <hr className='sparaiter' />
      <div className='flex-items gap-3 flex-column justify-content-center flex-sm-row gap-3'>
        <img src={cardHand} alt="" />
        <div className='flex-1'>
          <h3 className='fs-px_16 ln-ht-20px fw-medium text-center text-md-start mb-1'>Reception</h3>
          <p className='fs-px_14 fw-bold ln-ht-17px clr-gray-300 text-center text-md-start'>
            Paiement reçu de la part de{' '}
            <Link to={''} className='text-decoration-underline'>
              {personName}
            </Link>
          </p>
        </div>
        <div className='text-center'>
          <h3 className='fw-bold ln-ht-27px fs-px_20 clr-green-light'>
            {amount}
          </h3>
          <p className='fw-medium clr-gray-300 fs-px_14 ln-ht-17px'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentBox;
