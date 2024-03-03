import React from 'react';

// Define the type for the props
type CertificationsProps = {
  items: string[];
};

const Certifications: React.FC<CertificationsProps> = ({items }) => {
  return (
    <div className="about-box">
      <h1 className="titel">Certifications / Diplôme</h1>
      <ul className="mt-4 d-grid gap-2">
        {items && items.map((item, index) => (
          <li key={index} className="item-link">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
