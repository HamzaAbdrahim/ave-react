import { AddPostContext } from '../../../../../context/AddPostSteeperContext';
import AddaddressPostalPopup from './AddaddressPostalPopup';
import LocationCheckbox from './LocationCheckbox';
import './add__loction.css'
const AddLoction = () => {  
  const {IsAddloctionPopup ,   toggleIsAddloctionPopup  , handleNextStep} = AddPostContext();
  return (
    <>
    <div className='animate__animated animate__fadeInLeftBig delay-3s'
    >
    <p className='fw-bold fs-px-22 ln-ht-24px text-center'>Arrondissez vos fins de mois 
    ou développez votre activité professionnelle, 
      en répondant aux demandes postées autour de chez vous.</p>  
     {IsAddloctionPopup &&  <AddaddressPostalPopup />}
     <div>
      <LocationCheckbox
      label="Lyon"
      address="123street"
    />
          <LocationCheckbox
      label="Lyon"
      address="123street"
    />
      </div>
    <div className='flex-items gap-2 justify-content-between mt-4 mb-2'>
      <div className='w-75'>
    <p className='fw-normal fs-px_16 lh-sm'>Lorem ipsum dolor sit amet consectetur,
     adipisicing elit <br /> Sequi aperiam modi inventore pariatur error totam repudiandae 
     minima,
      doloremque magnam </p>
      </div>
      <div className='w-25 d-grid justify-content-end'>
    <button className='fw-medium fs-px_18 lh-base clr-green-light'
     onClick={toggleIsAddloctionPopup}>clik me</button>
      </div>
    </div>
      <div className='col-md-8 mx-auto text-center mt-3'>
        <button onClick={handleNextStep} className='green-button'>Next</button>
      </div>
    </div>
    </>
  )
}

export default AddLoction