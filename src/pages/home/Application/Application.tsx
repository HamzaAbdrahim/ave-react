import './application.css'
import badge_app_store from "../../../assets/badge-app-store.svg";
import badge_pla_store from "../../../assets/badge-playstore.svg";
import appliction_img from "../../../assets/appliction-img.svg";


const Application = () => {
  return (
    <section className="apliction-section min-vh-100 cenetr-grid">
    <div className="row gap-4 gap-lg-0 container">
      <div className="col-lg-6 text-center">
        <h1 className="apliction-titel text-center">Obtenez notre <br /> Application Mobile</h1>
        <div className="d-grid  gap-3">
          <a href="#" className="app-store-icon">
            <img src={badge_app_store} alt="" />
          </a>
          <a href="#" className="playstore-icon">
            <img src={badge_pla_store} alt="" />
          </a>
        </div>
      </div>
      <div className="col-lg-6 position-relative">
        <div className="circal-bhind-phone z-1">
        </div>
        <img src={appliction_img} className="w-100 position-relative z-2 h-100 object-fit-fill" alt="" />
      </div>
    </div>
  </section>
  )
}

export default Application