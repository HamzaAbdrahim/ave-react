import LodingPopup from "../../../components/commen/popUps/popupLoding/LodingPopup";
import { AddPostContext } from "../../../context/AddPostSteeperContext"
import PostSteeper from "./components/PostSteeper";
import small_logo from '../../../assets/small-logo.png';
import AddPostContent from "./components/AddPostContent/AddPostContent";
import AddLoction from "./components/addLoction/AddLoction";
import AddBudget from "./components/addBudget/AddBudget";
import AddAi from "./components/addAi/AddAi";
import AddPostImges from "./components/addPostImges/AddPostImges";
import { Suspense } from "react";


const AddPostSteeper = () => {
    const {toggleshowPostPopup , Poststep , IslodingPostPopUp} = AddPostContext()
   const renderPostComponent = () => {
    switch (Poststep) {
      case 1:
        return <AddPostContent />;
      case 2:
        return <AddLoction />;
      case 3:
        return <AddBudget /> ;
      case 4:
        return <AddAi />;  
    case 5: 
    return <AddPostImges />;
      default:
      return null;
    }
  };
  return (
 <Suspense fallback={<LodingPopup />}>
    <div onClick={toggleshowPostPopup} className={`bg-shadow active`}></div>
        <section className={`auth_box  row m-0 gap-2 overflow-y-auto p-2 h- bg-white`}>
        {IslodingPostPopUp && <LodingPopup />}
        <div className='text-end animate__animated animate__bounceInDown'>
          <button id='close' onClick={toggleshowPostPopup}>
            <i
              className='bi bi-x-lg'
              style={{ fontSize: 'min(40px, 20px)' }}
            ></i>
          </button>
        </div>
        <div className='text-center animate__animated animate__bounceInDown'>
          <img src={small_logo} className='box-img' alt='' />
          <p className='section-titel'>S’inscrire</p>
        </div>
        <PostSteeper />
        {renderPostComponent()}
      </section>
</Suspense>
  
  )
}

export default AddPostSteeper