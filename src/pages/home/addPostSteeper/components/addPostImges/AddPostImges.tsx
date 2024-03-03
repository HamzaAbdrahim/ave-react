import { AddPostContext } from '../../../../../context/AddPostSteeperContext'
import UplodeImgArea from './UplodeImgArea'
import './addPost_imges.css'

const AddPostImges = () => {
  const {handleNextStep} = AddPostContext()

  return (
    <div className='animate__animated animate__fadeInLeftBig delay-3s'
    >
    <p className='fw-bold fs-px-22 ln-ht-24px mb-4 text-center'>Arrondissez vos fins de mois ou développez votre activité professionnelle, 
      en répondant aux demandes postées autour de chez vous.</p>  
      <UplodeImgArea />
      <div className='col-md-8 mx-auto text-center mt-3'>
        <button className='green-button' onClick={handleNextStep}>Next</button>
      </div>
    </div>
  )
}

export default AddPostImges