import { useRef, useState } from 'react';
import user_img from '../../../assets/request-imges/Image-40.png';
import { Link } from 'react-router-dom';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const PopupInfo = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    return isVisible ? setIsVisible(false) : false;
  };
  useOnClickOutside(ref, handleClickOutside);

  const menuItems = [
    { text: 'Mon profile', icon: 'bi bi-person' , path:'/account' },
    { text: 'Mes demandes', icon: 'bi bi-plus-circle' , path:'' },
    { text: 'Mon solde', icon: 'bi bi-currency-euro' , path:'' },
    { text: 'Mes cartes', icon: 'bi bi-credit-card-2-front' , path:'' },
    { text: 'Centre d’aide', icon: 'bi bi-info-circle' , path:'' },
    { text: 'À propos', icon: 'bi bi-info-circle' , path:'' },
  ];

  return (
    <div className="flex-items position-relative" style={{ gap: '15px' }}>
      <div className="price-box">
        <span>180€</span>
      </div>
      <div
        ref={ref}
        className={`${isVisible ? 'active animate__zoomIn' : 'animate__zoomOut d-none'} animate__animated user-popup-info d-grid gap-3 p-3 z-3`}
      >
        <div className="flex-items justify-content-between gap-3">
          <Link to="/profile" className="underline-name text-decoration-underline">
            Morgan louis
          </Link>
          <div className="small-price-box px-2">
            <span>180€</span>
          </div>
        </div>
        <hr className="sparaiter" />
        {menuItems.map((item, index) => (
          <>
          <Link key={item.text} to={item.path} className={` d-flex align-items-center gap-3 link`}>
            <i className={item.icon}></i>
            {item.text}
          </Link>
        {index === 2 && <hr className="sparaiter" />}
          </>
        ))}
        <hr className="sparaiter" />
        <a href="#" className="d-flex align-items-center gap-3 link">
          <i className="bi bi-box-arrow-right"></i>
          Déconnexion
        </a>
      </div>
      <button id="profile-img">
        <img
          src={user_img}
          onClick={() => setIsVisible(!isVisible)}
          className="header-user-img"
          alt="Profile"
        />
      </button>
    </div>
  );
};

export default PopupInfo;
