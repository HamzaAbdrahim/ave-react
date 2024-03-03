import Navbar from "../pages/dashbord/navbar/Navbar"
import OfferBigCard from "../pages/offers/OfferBigCard"
import FavorisCard from "../pages/offers/favoris/FavorisCard"

const OfferLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-xl">
          <div className="col-md-7 col-lg-8 order-2 order-lg-1">
            <OfferBigCard />
          </div>
          <div className="col-md-5 col-lg-4 order-1 order-lg-2">
            <FavorisCard />
          </div>
      </div>
  </div>
    </>
  )
}

export default OfferLayout