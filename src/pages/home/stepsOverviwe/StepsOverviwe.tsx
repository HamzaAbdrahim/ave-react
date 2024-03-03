import  stepImg__one from "../../../assets/steps/homepage-telephone-vibre-l.png";
import stepImg__two  from "../../../assets/steps/homepage-bricolage-l.png";
import  stepImg__three from "../../../assets/steps/homepage-telephone-l.png";
import  wave from "../../../assets/wave-bottom.svg";

import './steps__overviwe.css'
import Step from "./Step";


export default function StepsOverviwe() {
    const stepData = [
        {
          stepImg: stepImg__one,
          stepDescription: '1. Je suis alerté en temps réel des demandes postées autour de moi.',
        },
        {
          stepImg: stepImg__two,
          stepDescription: '2. Je réponds aux demandes et réalise des prestations.',
        },
        {
          stepImg: stepImg__three,
          stepDescription: '3. Je suis payé et évalué.',
        },
      ];
  return (
    <section className="min-vh-100 my-3 d-grid place-items-center">
      <div className="w-100">
    <img src={wave} className="wave__top" alt="" />
        <div className='wave__background py-5 w-100'>
    <div className="container">
       <h1 className='titel text-center fw-bold'><span>
        <strong>
        Particuliers,
        </strong>
        </span> {" "}
       arrondissez vos fins de mois avec AlloVoisins !
       </h1>
        <div style={{marginBlock:'4rem'}} className='row my-4'>
        {stepData.map((step, index) => (
        <Step key={index} stepImg={step.stepImg} stepDescription={step.stepDescription} />
      ))}
        </div>
        <div className='col-10 col-sm-6 col-lg-4 mx-auto'>
            <button className='step__button px-4'>Je propose mes services</button>
        </div>
    </div>
        </div>
    <img src={wave} className="wave__bottom" alt="" />
      </div>

  </section>
  )
}

