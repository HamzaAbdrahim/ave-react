import { Link } from "react-router-dom";
import userImage  from "../../../assets/Image-40.png";
import './demandeUserPost.css'
import Post from "./Post";
import SliderDemand from "./Slider";
import Userloction from "./Userloction";



const DemandeUserPost = () => {
      const image =[    
        'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
        'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
        'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
        'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
      ]
  return (
    <div className="DemandeUserPost mb-4">
      <div className="flex-items flex-wrap gap-4 mb-4">
        <div style={{width:'10%'}}>
          <img
            src={userImage}
            className="user-post-img img-fluid"
            style={{ height: 'clamp(60px, 4vw, 100px)' }}
            alt=""
          />
        </div>
        <div className="w-100">
          <div className="flex-items flex-wrap justify-content-between">
          <h1 className="user-name text-center text-sm-start flex-1">Gilberto B.</h1>
          <p className="fw-bolder clr-gray-300 fs-px_10" style={{lineHeight:'12px'}}>Hier à 13h</p>
          </div>
          <span className="user-loction text-center text-sm-start">Vienne (Jean-Moulin) - 13,4 km</span>
        </div>
      </div>
      <div className="row gap-4 gap-lg-0 justify-content-center">
      <div className="col-lg-6">
        <Post />
      </div>
      <div className="col-lg-6 position-relative">
        <SliderDemand imges={image} />
      </div>
      </div>
      <Userloction />
      <hr className="line" />
      <div className='flex-items flex-column-reverse justify-content-center flex-sm-row justify-content-sm-between gap-3'>
          <Link to='/DetailsDemand' className='Demande-publique-button px-2 flex-items gap-2'>
          <i className="bi bi-globe-asia-australia"></i>
          Demande publique
          </Link>
        <div className="flex-items gap-3">
          <a href="">
            <i className="bi bi-suit-heart"></i>
          </a>
          <a href="">
            <i className="bi bi-people"></i>
          </a>
          <a href="">
            <i className="bi bi-chat"></i>
          </a>
        </div>
        </div>
    </div>
  )
}

export default DemandeUserPost



