import { Link } from 'react-router-dom'
import arrow_down from "../../../assets/Vector (1).png";
import PaymentBox from './PaymentBox';

const TransactionDeatiles = () => {
  const paymentData = {
    type: 'payment',
    serviceName: 'Service Name',
    personName: 'Fernando Gaucho',
    amount: '150€',
    date: '17 Oct',
  };

  return (
    <>
    <div className='flex-items justify-content-between gap-2 mb-5'>
        <h3 className='fw-bold fs-px-22 ln-ht-27px'>Dernières transactions</h3>
        <Link to='' className='clr-gray-300 fw-normal fs-px_14 ln-ht-17px'>
        Voir Tout
        </Link>
    </div>
    <div className='flex-items w-50 justify-content-between'>
        <button className='fw-medium active fs-px_18 ln-ht-20px clr-green-light line-green'>Tout</button>
        <button className='fw-medium fs-px_18 ln-ht-20px clr-green-light line-green'>Revenu</button>
        <button className='fw-medium fs-px_18 ln-ht-20px clr-green-light line-green'>Dépenses</button>
    </div>
    <hr />
    <button className='flex-items pt-3 clr-blue-gray gap-2 my-3 fw-medium fs-px_16 ln-ht-20px'>
    Aujourd’hui
    <img src={arrow_down}  alt="" />
    </button>
    <PaymentBox {...paymentData} />
    </>
  )
}

export default TransactionDeatiles


