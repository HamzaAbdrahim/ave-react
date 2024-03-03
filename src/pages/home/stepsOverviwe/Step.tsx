import React from 'react';

type StepProps = {
  stepImg: string;
  stepDescription: string;
}

const Step: React.FC<StepProps> = ({ stepImg, stepDescription }) => {
  return (
    <div className='step__box col-md-6 p-4 col-lg-4 d-grid place-items-center'>
      <img src={stepImg} className='step__img' alt='' />
      <p className='step__discrption'>{stepDescription}</p>
    </div>
  );
};

export default Step;
