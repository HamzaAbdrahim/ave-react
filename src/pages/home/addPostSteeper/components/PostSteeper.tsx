import { AddPostContext } from "../../../../context/AddPostSteeperContext"

const PostSteeper = () => {
    const {Poststep  , ToPoststep}  = AddPostContext()
  return (
    <div className="d-flex align-items-center justify-content-center
    mb-3 animate__animated animate__bounceInDown px-0 px-md-2 ">
   <span onClick={() => ToPoststep(1) } className={`step-box cursor-pointer 
   ${Poststep === 1 ? "" : 'done'}`}>
     {Poststep === 1 ? 1 :<i className="bi bi-check2 text-white"></i>}
   </span>
   <hr className={`blue-line ${Poststep >= 2 ? 'done'  : '' }`} />
   <span onClick={() => ToPoststep(2) } className={`step-box cursor-pointer 
   ${Poststep >= 3 ? "done" : ''}`}>
   {Poststep >= 3 ? <i className="bi bi-check2 text-white"></i> : 2}
   </span>
   <hr className={`blue-line ${Poststep >= 3 ? 'done' : '' }`} />
   <span onClick={() => ToPoststep(3) } className={`step-box cursor-pointer ${Poststep > 3 ? "done" : ''}`}>
   {Poststep > 3 ? <i className="bi bi-check2 text-white"></i> : 3}
   </span>
   <hr className={`blue-line ${Poststep >= 4 ? 'done' : '' }`} />
   <span onClick={() => ToPoststep(4) } className={`step-box cursor-pointer ${Poststep > 4 ? "done" : ''}`}>
   {Poststep > 4 ? <i className="bi bi-check2 text-white"></i> : 4}
   </span>
   <hr className={`blue-line ${Poststep >= 5 ? 'done' : '' }`} />
   <span onClick={() => ToPoststep(5) } className={`step-box cursor-pointer ${Poststep > 4 ? "done" : ''}`}>
   {Poststep > 5 ? <i className="bi bi-check2 text-white"></i> : 5}
   </span>
 </div>
  )
}

export default PostSteeper
