import React from 'react';
import { Link } from 'react-router-dom';
import userImage from '../../../assets/Image-50.png';
import workImge from '../../../assets/workPostimg.png';
import { UserOfferUser } from '../../../types/Types';


const CarsoulUser: React.FC<UserOfferUser> = ({ link , name , online , rating  , type , workingImages , id }) => {
  return (
    <div key={id} className='carsoul__user'>
      <div className='flex-items gap-3 px-3'>
        <div className='user__img position-relative'>
          <img src={userImage} alt="" />
          {online && <span className='state__online'></span>}
        </div>
        <div>
          <div className='flex-items gap-2'>
            <h3 className='user-name'>{name}</h3>
            <div className='flex-items gap-1 flex-1'>
              <p className='rate-gray'>({rating})</p>
              <i className="bi bi-star-fill"></i>
            </div>
            <button className='verySmall-button'>{type}</button>
          </div>
          <p className='contect-link'>
            <Link to={link}>
              <strong>Menage</strong>
            </Link> •Givors (Canal)
          </p>
        </div>
      </div>
      <div className='flex-items workimg__space mt-3'>
        {workingImages && workingImages.map((image: string, index: React.Key) => (
          <div key={index}>
            <img src={image || workImge} loading='lazy' className='img-fluid object-fit-fill' alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsoulUser;
