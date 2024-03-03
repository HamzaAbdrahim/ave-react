import './StateSheardPopup.css'
import closePopup from '../../../../assets/closePopup.png'
import { useYourContext } from '../../../../context/MultiStepForm';

interface PopupProps {
    title: string;
    description: string;
    type:'err' | 'success';
  }

const LogoutPopup: React.FC<PopupProps> = ({
    title,
    description,
    type
  }) => {
  const { setActiveButton } = useYourContext();

  return (
    <> 
    <div className={`${type} active
    position-fixed d-grid place-items-center 
    top-50 left-50 translate-middle bg-white logout__popup`} >
        <div className='position-relative backgroundCircal'>
        <img src={closePopup} className='position-absolute top-50 left-50 translate-middle' alt="" />
        </div>
        <div>
        <h4 className='popup__titel fw-bold ln-ht-20px fs-px-24 my-3' >{title} </h4>
        <p className='popup__discrption fs-px_18 ln-ht-20px fw-normal clr-gray-300'>
            {description}</p>
        </div>
        <div className='p-3 flex-items flex-sm-nowrap flex-wrap justify-content-center justify-content-sm-between gap-3 w-100'>
            <button onClick={() => setActiveButton('nothing')} className='popupButton gray__button'>Cancel</button>
            <button onClick={() => setActiveButton('nothing')}  className='popupButton main__button text-white'>Deconnexion</button>
        </div>
    </div>
    </>
  )
}

export default LogoutPopup