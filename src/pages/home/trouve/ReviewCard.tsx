import React from 'react';

interface ReviewCardProps {
  userName: string;
  userType: string;
  userRate: number;
  userImageSrc: string;
  reviewDescription: string;
  reviewPublishedTime: string;
  isActive?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  userType,
  userRate,
  userImageSrc,
  reviewDescription,
  reviewPublishedTime,
  isActive
}) => {
  return (
    <div className={`reviews-card ${isActive ? 'active' : 'mx-auto'}`}>
      <div className="flex-items gap-2 mb-4">
        <img src={userImageSrc} className="user-img" loading="lazy"  alt="" />
        <div className="d-flex flex-column">
          <div className="flex-items">
            <p className="user-name mb-0">{userName}</p>
            <button className="revwie-button">{userType}</button>
          </div>
          <span className="user-rate flex-items gap-1">
            ({userRate})
            <i className="bi bi-star-fill" style={{ color: 'rgb(252, 221, 46)', fontSize: '14px' }}></i>
          </span>
        </div>
      </div>
      <div>
        <p className="review-discrption">{reviewDescription}</p>
        <a href="#" className="readmore-button">
          Voir plus
        </a>
      </div>
      <p className="review-publiched mt-4">{reviewPublishedTime}</p>
    </div>
  );
};

export default ReviewCard;
