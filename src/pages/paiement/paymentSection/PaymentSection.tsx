import CardDetails from "../../pyementCards/deatilesCard/CardDetails";
import PaymentWayBox from "../paymentWayBox/PaymentWayBox";
import payoneer from '../../../assets/paymentway_icons/payoneer.png';
import paypalimg from '../../../assets/paymentway_icons/paypalimg.png';
import masterCard from  '../../../assets/paymentway_icons/masterCard-image.png'
import visaImage from '../../../assets/paymentway_icons/visa-image.png'
import correctImage from '../../../assets/correct 1.png'
import masterCardImage from '../../../assets/masterCard__img.png'
import AddCartPayment from "../../../components/commen/ui/AddCartPayment";



const PaymentSection: React.FC = () => {
    const cardDetails = {
        cardNumber: '8050 5040 2030 XXXX',
        cardHolderName: 'HAMZA',
        expiryDate: '03/25',
        cvv: '233',
      };
  return (
    <>
      <h1 className="ln-ht-50px fs-px-40 fw-bold mb-5">Méthode de paiement</h1>
      <div className="flex-items flex-wrap justify-content-center justify-content-md-start gap-4">
        <PaymentWayBox paymentImageSrc={masterCard} />
        <PaymentWayBox paymentImageSrc={payoneer} />
        <PaymentWayBox paymentImageSrc={paypalimg} />
        <PaymentWayBox paymentImageSrc={visaImage} />
      </div>
      <h2 className="my-5 fs-px-24 ln-ht-30px">Choisissez votre carte</h2>
      <div>
        <div className="flex-items flex-column-reverse flex-md-row justify-content-center gap-5">
          <div className="scale__hover">
            <img src={masterCardImage} alt="Master Card" />
          </div>
          <div className="scale__hover">
            <img src={correctImage} className={`green-sient position-absolute`} alt="Correct" />
            <img src={masterCardImage} alt="Master Card" />
          </div>
          <AddCartPayment />
        </div>
        <div className="col-lg-8 clr-gray-300">
          <CardDetails {...cardDetails} />
        </div>
      </div>
    </>
  );
};

export default PaymentSection;
