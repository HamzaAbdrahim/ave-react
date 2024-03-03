import { FC, useState } from "react";
import dogImage  from "../../../assets/dogImage.png";
import arrowRight  from "../../../assets/arrow-right.png";


type props = {
    imges:string[];
}
const SliderDemand:FC<props> = ({imges}) => {    
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imges.length);
    };
    const goToSlide = (index:number) => {
        setCurrentIndex(index);
      };
    
  return (
    <>
        <img src={imges[currentIndex] || dogImage} className="tras w-100 mb-2 h-100 img-fluid" 
        style={{'borderRadius':'5px'}} alt={`Slide ${currentIndex}`} />
        <button onClick={nextSlide} className="next-button">
          <img src={arrowRight} alt="" />
        </button>
        <div className="flex-items justify-content-center gap-2">
        {imges.map((_, index:number) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''} cursor-pointer`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
        </div>
    </>
  )
}

export default SliderDemand