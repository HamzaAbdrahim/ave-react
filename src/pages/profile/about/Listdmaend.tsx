import React from 'react';
import { DemandItem } from '../../../types/Types';

// Define the type for the demand list item


// Define the type for the Listdmaend component props
type ListdmaendProps = {
  demands: DemandItem[];
};

const Listdmaend: React.FC<ListdmaendProps> = ({ demands }) => {
  return (
    <div className="about-box">
      <h1 className="titel">Répond à vos demandes de</h1>
      <ul className="about-list d-grid gap-2">
        {demands && demands.map((demand, index) => (
          <li key={index} className="list-item">
            <p>{demand.title} ({demand.responses} réponses)</p>
            <div className="flex-items flex-wrap gap-2">
              {demand.buttons.map((button, btnIndex) => (
                <a key={btnIndex} href="#" className="small-about-button">
                  {button}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listdmaend;
