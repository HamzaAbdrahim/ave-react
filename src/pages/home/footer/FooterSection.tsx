import React from 'react';
import footer_logo from "../../../assets/svg file 1.png";
import badge_app_store from "../../../assets/badge-app-store.svg";
import badge_pla_store from "../../../assets/badge-playstore.svg";

type FooterSectionProps =  {
  title: string;
  items: string[];
  Showlogo?:true | false;
  IslastSection?:true | false;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items , Showlogo = false ,IslastSection=false }) => (
  <div className="flex-1">
    {Showlogo && <img src={footer_logo} className="footer-img mb-5" alt="" />}
      <h2 className="footer-title mb-2">{title}</h2>
      {!IslastSection ? 
      <>
        <ul className="d-grid gap-3">
      {items.map((item, index) => (
        <li key={index} className="footer-link">
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
      </>
      :
      <>
      <ul className="text-center d-grid">
            <a href="#" className="footer-app-store-icon mt-3 mb-1">
              <img src={badge_app_store } alt="" />
            </a>
            <a href="#" className="footer-playstore-icon">
              <img src={badge_pla_store} alt="" />
            </a>
     </ul>
      </>
     }
  </div>
);

export default FooterSection