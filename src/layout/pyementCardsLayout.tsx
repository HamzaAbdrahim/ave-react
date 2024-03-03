import Navbar from "../pages/dashbord/navbar/Navbar"
import AddPaymentCard from "../pages/pyementCards/Carts/AddPaymentCard"
import TransactionDeatiles from "../pages/pyementCards/transactions/TransactionDeatiles"
import '../pages/pyementCards/payment__card.css'
import DeatilesCard from "../pages/pyementCards/deatilesCard/DeatilesCard"

const PyementCardsLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page mobile-flex-col position-relative overflow-hidden flex-items justify-content-center py-4">
      <div className="container-lg">
        <div className="col-lg-10 col-xl-9 m-auto">
      <AddPaymentCard />
      <TransactionDeatiles />
        </div>
      </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <DeatilesCard />
        </div>
  </div>
    </>
  )
}

export default PyementCardsLayout