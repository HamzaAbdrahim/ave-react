import React from 'react';
import favorite from '../../assets/favorite 1.png'
import correct_icon from '../../assets/correct 1.png'
import blue_correct_icon from '../../assets/blue-corect-button.png'
import blue_starts from '../../assets/Group 143.png'
import company_icon from '../../assets/company 1.png'


type PricePackageProps =  {
  type: string;
  title: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}

const PricePackage: React.FC<PricePackageProps> = ({ title, price, features, isPremium }) => {
  return (
    <div className={`pricePackage-box Poppins ${isPremium ? ' Premium' : ''} bg-white ${isPremium ? '' : 'py-4'}`}>
      {isPremium && (
        <div className="blue-box bg-main-blue text-white text-center mb-2">
          <p>Le plus choisis</p>
        </div>
      )}
      <div className="d-grid px-4 justify-content-center">
        <p className={`text-center ${title === 'PRIX' ? 'text-uppercase inter' : false} package-type fw-semibold fs-px_16 ln-ht-20px sp-letter-05 ${isPremium ? 'clr-main-blue' : 'clr-green-light'}`}>
          {title === 'PRIX' ? 'Entreprise' : title}
        </p>
        {title === 'PRIX' && 
        <span className='fs-px_14 fw-normal ln-ht-20px text-center mt-3'><strong className='fs-px-24'>PRIX </strong> <br /> PERSONNALISÉ</span>}
        {title !== 'PRIX' && <p className="text-center package-price fw-bold fs-px-33 ln-ht-40px position-relative mt-3 mb-1">{price}</p>}
       {title !== 'PRIX' &&
        <p className="text-center clr-gray-300 fw-medium fs-px_16 ln-ht-20px text-center">par mois</p>}
      </div>
      <div className={`flex-items px-4 my-3 justify-content-center gap-3`}>
        {isPremium ? <img src={blue_starts} alt="" /> : 
        title === 'PRIX' ? <img src={company_icon}  alt="" /> : 
         <img src={favorite} alt="" />}
        {title === 'Avancé' && <img src={favorite} alt="" />}
      </div>
      <div className={`gap-2 px-4 d-grid ${isPremium ? '' : 'flex-column'}`}>
        {features.map((feature, index) => (
          <div key={index} className="flex-items gap-2 cursor-pointer">
            <img src={isPremium ? blue_correct_icon  :correct_icon} alt="" className="img-fluid" />
            <p className="fw-normal fs-px_14 ln-ht-20px">{feature}</p>
          </div>
        ))}
        {isPremium && (
          <>
            <div className="flex-items gap-2 cursor-pointer">
              <img src={blue_correct_icon} alt="" className="img-fluid" />
              <p className="fw-normal fs-px_14 ln-ht-20px">Tout les droits</p>
            </div>
            <div className="flex-items gap-2 cursor-pointer">
              <img src={blue_correct_icon} alt="" className="img-fluid" />
              <p className="fw-normal fs-px_14 ln-ht-20px">Tout les droits</p>
            </div>
          </>
        )}
      </div>
      {isPremium && <button className="main_blue_button col-8 mx-auto mt-5 mb-3">CHOISIR</button>}
    </div>
  );
};

export default PricePackage;
