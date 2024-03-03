import React from 'react';
import masterCardBox from '../../../assets/masterCard-box.png'; // Replace with actual path
import smallLogo from '../../../assets/icon.png'; // Replace with actual path
import PaymentDetailsList from './PaymentDetailsList';

const PaymentDetails: React.FC = () => {
    const paymentDetails = [
        { label: 'Service Provider', value: 'Aya HAMZA' },
        { label: 'Service Type', value: 'House Plan' },
        { label: 'Information 2', value: 'Description 128' },
        { label: 'Service Provider', value: 'Aya HAMZA' },
      ];
  return (
    <>
    <div className='text-center master_card__img d-none d-lg-block'>
      <img src={masterCardBox} alt="Master Card Box" className="" />
    </div>
      <div className="w-100 masterCard-box rounded-4 position-relative m-auto py-4">
        <div className="text-center d-lg-none">
          <img src={masterCardBox} alt="Master Card Box" className="" />
        </div>
        <PaymentDetailsList details={paymentDetails} />
        <div className="position-relative overflow-hidden z-2 d-grid place-items-center"
          style={{ height: '7rem', backgroundColor: '#E3E9EE' }}>
          <div className="circal-white pos-left z-1"></div>
          <hr className="dotted-hr w-75 mx-auto" />
          <div className="circal-white pos-right z-1"></div>
        </div>
        <div className="flex-items px-4 justify-content-between">
          <div className="px-4">
            <h5 className="clr-gray-300 fs-px-22 ln-ht-27px fw-bold mb-2">Total à payer</h5>
            <p className="fs-px-33 ln-ht-40px fw-bold">2230.50 {" "} <span className="fs-px_20 fw-medium">€</span></p>
          </div>
          <img src={smallLogo} alt="Small Logo" />
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
