import wallet from "../../../assets/wallet.png";
import CardDetails from "./CardDetails";
import TransactionDetails from "./TransactionDetails";

const DeatilesCard = () => {
    const transactionData = {
        amount: '150€',
        transactionDate: '17/10/2024 5:39 PM',
        recipient: 'Fernando Gaucho',
        serviceOffered: 'Réparation de véhicule',
      };
      const cardDetails = {
        cardNumber: '8050 5040 2030 XXXX',
        cardHolderName: 'HAMZA',
        expiryDate: '03/25',
        cvv: '233',
      };
      
  return (
    <div className="DeatilesCard ml-auto">
        <div className="d-flex align-items-end  mb-2 gap-2">
            <img src={wallet} alt="" />
            <p className="fs-px-22 fw-bold ln-ht-28px">Balance</p>
        </div>
        <div className="d-flex align-items-end gap-2">
            <p className="fs-px_20 text-black fw-medium ln-ht-27px">€</p>
            <p className="fw-medium clr-main-blue fs-px-33 ln-ht-40px">2230.50</p>
        </div>
        <CardDetails {...cardDetails} />
        <hr className="dotted-hr my-5" />
        <h1 className="fs-px-22 fw-bold ln-ht-28px mb-3">
Détail de dernière <br /> transaction
        </h1>
        <TransactionDetails  {...transactionData}/>
    </div>
  )
}

export default DeatilesCard
