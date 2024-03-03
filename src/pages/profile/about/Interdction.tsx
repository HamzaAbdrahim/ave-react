import React from 'react';

// Define the type for the props
type IntroductionProps = {
  description: string;
};

const Introduction: React.FC<IntroductionProps> = ({ description }) => {
  return (
    <div className="about-box">
      <h2 className="titel">Présentation</h2>
      <p className="discrption">{description}</p>
    </div>
  );
};

export default Introduction;