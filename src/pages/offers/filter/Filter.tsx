import "./filter.css";
import arrow_down from '../../../assets/arrow_down.png'
import { Link } from "react-router-dom";
const Filter = () => {
  return (
    <div className="Filter__box">
      <div className="flex-items flex-wrap justify-content-center gap-3 m-3 gap-sm-4 gap-lg-0 justify-content-center align-items-center">
        <div className="flex-1">
        <button className="flex-items gap-2 dropdown-button ">
        Catégorie
        <img src={arrow_down} alt="" />
        </button>
        </div>
        <div className="flex-1">
        <button className="flex-items gap-2 dropdown-button">
        Adresse
        <img src={arrow_down} alt="" />
        </button>
        </div>
        <div className="flex-1 flex-wrap justify-content-xl-end justify-content-center gap-xl-4 gap-2 flex-items">
          <Link to='' className="gray__link text-center">Effacer</Link>
          <button className="small_green_button">Rechercher</button>
        </div>
      </div>
    </div>
  )
}

export default Filter