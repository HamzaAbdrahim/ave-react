import { AddPostContext } from '../../../../../context/AddPostSteeperContext'
import PostInput from './PostInput'
import './addpost__content.css'
const AddPostContent = () => {
  const {handleNextStep} = AddPostContext()
  return (
    <>
    <div className='animate__animated animate__fadeInLeftBig delay-3s'
    >
    <p className='fw-bold fs-px-22 ln-ht-24px mb-4 text-center'>Arrondissez vos fins de mois ou développez votre activité professionnelle, 
      en répondant aux demandes postées autour de chez vous.</p>  
    <PostInput />
    <div className='col-10 mt-4 mx-auto animate__animated animate__tada delay-4s'>
    <span className='tips__box  text-white p-2 bg-green-light fs-px_18 fw-medium rounded-3'>Tips:</span>
    <p className='fw-normal pt-2 fs-px_18 ln-ht-20px mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Fugit vel odio adipisci veniam! Iure natus omnis sed soluta, 
      voluptates non quod doloremque illum vero dignissimos sint consectetur 
      aliquam a officiis?</p>
    </div>
      <div className='col-md-8 mx-auto text-center mt-3'>
        <button className='green-button' onClick={handleNextStep}>Next</button>
      </div>
    </div>
    </>
  )
}

export default AddPostContent