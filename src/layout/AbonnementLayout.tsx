import Navbar from "../pages/dashbord/navbar/Navbar"
import Titel from "../pages/abonnement/Titel"
import BottomText from "../pages/abonnement/BottomText"
import Abonnement_background from '../assets/Abonnement-background.png'
import PricePackage from "../pages/abonnement/PricePackage"
import { basicPackage, advancedPackage, premiumPackage, anotherBasicPackage } from "../pages/abonnement/packageData"


const AbonnementLayout = () => {
  return (
    <>
    <Navbar />
    <div className="Abonnement-background bg-gray-light d-flex justify-content-center position-relative py-4">
        <img src={Abonnement_background} alt="" 
        style={{marginTop:'-1.2rem'}}
        className="position-absolute top-0 z-1 d-none d-md-block left-0 w-100 h-100" />
      <div className="row gap-4 gap-md-0 container">
        <Titel />
        <div className="pricePackage-box-container position-relative z-2 col-lg-10 mx-auto">
      <PricePackage {...basicPackage} />
      <PricePackage {...advancedPackage} />
      <PricePackage {...premiumPackage} />
      <PricePackage price={""} {...anotherBasicPackage} />
        </div>
        <BottomText />
      </div>
  </div>
    </>
  )
}

export default AbonnementLayout