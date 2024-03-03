import './hero.css'
import hero_logo from "../../../assets/svg file 1.png";
import Ellipse from "../../../assets/Ellipse 108.png";
import pics from "../../../assets/pics.png";
import SearchBar from './searchBar/SearchBar';

const Hero = () => {
  return (
    <main className="hero-section mt-5 container-lg position-relative cenetr-grid">
      <img src={Ellipse} className="position-absolute big-circal w-100 z-1" alt="" />
      <div className="hero-background position-relative z-2 p-2 p-md-4">
        <div className="row gap-4 gap-lg-0">
          <div className="col-lg-7">
            <div className="text-center text-lg-start">
              <img src={hero_logo} className="hero-logo" alt="" />
            </div>
            <h1 className="hero-titel text-center text-lg-start my-3">Prestations de <br className="d-none d-md-block" /> services et location de <br className="d-none d-md-block" /> matériel</h1>
            <p className="hero-discrption text-center text-lg-start">4 millions d’habitants et <br /> professionnels partout en France</p>
            <div className=' col-sm-10 col-md-8 col-lg-11 mx-auto mx-lg-0'>
            <SearchBar />
            </div>
            <div className="flex-items justify-content-center justify-content-lg-start mt-4" style={{ gap: 'clamp( 5px ,4vw , 10px)', marginLeft: '5px' }}>
              <p className="hero-text">Populair:</p>
              <span className="hero-tab cursor-pointer">
                <a href="">plombier</a>
              </span>
              <span className="hero-tab cursor-pointer">
                <a href="">bricolage</a>
              </span>
              <span className="hero-tab cursor-pointer">
                <a href="">Literie</a>
              </span>
            </div>
          </div>
          <div className="col-lg-5 position-relative z-2 text-center text-lg-end">
            <img src={pics} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;