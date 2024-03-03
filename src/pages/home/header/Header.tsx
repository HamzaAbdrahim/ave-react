import { Link, NavLink } from 'react-router-dom';
import './header.css'
import headerNavLinks from '../../../data/headerNavLinks';
import nav_logo from "../../../assets/icon.png";
import { useEffect, useState } from 'react';
import { useYourContext } from '../../../context/MultiStepForm';


const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { toggleshowPopup , showPopup } = useYourContext();



  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile:boolean = windowWidth <= 992;
 
  return (
    <>
    <div onClick={closeMenuOnMobile} className={`${showMenu && isMobile ? 'active' : ''} bg-shadow`}>

    </div>
    <header className="d-grid py-3">
      <div className="flex-items container-lg">
        <nav className="flex-items flex-1">
          <Link to='/' className='website-logo'>
            <img src={nav_logo} alt="navbar logo" />
          </Link>
          <ul id="navlinsk" className={`${showMenu && isMobile && !showPopup ? 'active' : ''} flex-items navlinsk`} style={{ gap: 'clamp(30px ,5vw , 58px)' }}>
            <Link
             to={'/'} 
            style={{ top: '4rem' }}
            className="d-lg-none position-absolute left-50 translate-middle-x"
            >
              <img src={nav_logo} loading='lazy' alt="navbar logo" />
            </Link>
            {headerNavLinks.map((navlink, index) => (
            <NavLink className="fs-px_18 fw-semibold ln-ht-28px" key={index} to={navlink.href}>
            {navlink.title}
            </NavLink>
            ))}
            <div className="d-grid d-lg-none text-center" style={{ gap: 'clamp(10px ,5vw , 20px)' }}>
              <a href="#" onClick={toggleshowPopup}  className="fs-px_18 fw-semibold ln-ht-28px">S’inscrire</a>
              <button id="connecter-button" className="outline-button clr-blue-gray fs-px_18 fw-semibold ln-ht-25px">Se connecter</button>
            </div>
          </ul>
        </nav>
        <div className="d-none d-lg-flex align-items-center" style={{ gap: 'clamp(30px ,5vw , 45px)' }}>
          <a href="#" onClick={toggleshowPopup} id="inscrire-link" className="fs-px_18 fw-semibold ln-ht-28px">S’inscrire</a>
          <button id="connecter-button" className="outline-button clr-blue-gray fs-px_16 fw-semibold ln-ht-25px">Se connecter</button>
        </div>
        <button id="menu-button" onClick={toggleMenu} className="mobil-menu d-lg-none">
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
    </>
  );
}

export default Header;