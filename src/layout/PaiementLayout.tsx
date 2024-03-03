import Navbar from "../pages/dashbord/navbar/Navbar"
import payment_icon from "../assets/payment_icon.svg";                 
import '../pages/paiement/paiement.css'
import PaymentSection from "../pages/paiement/paymentSection/PaymentSection";
import PaymentDetails from "../pages/paiement/paymentDetails/PaymentDetails";

const PaiementLayout = () => {
  return (
          <>
        <Navbar />
        <div className="main-page position-relative flex-items justify-content-center py-4">
          <img src={payment_icon} alt="" className="payment__icon position-absolute top-0 right-0"  />
          <div className="container-lg align-items-center row gap-lg-0 gap-4">
            <div className="col-lg-7">
              <PaymentSection />
            </div>
            <div className="col-lg-5 position-relative z-2">
              <PaymentDetails />
            </div>
          </div>
      </div>
        </>
  )
}

export default PaiementLayout
