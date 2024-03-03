import './trouve.css'
import circles from "../../../assets/circles.png";
import BigRequestCard from './BigRequestCard';
import ReviewCard from './ReviewCard';
import { useState, useEffect } from 'react';
import { getBigRequests, getReviews } from '../../../service/apiService';
import { TypePropsBigRequest, TypePropsReview } from '../../../types/Types';
import BigRequestCardLoder from '../../../components/commen/sklitionsLoders/BigRequestCardLoder';
import ReviewCardLoder from '../../../components/commen/sklitionsLoders/ReviewCardLoder';

const Trouve = () => {
  const [bigRequests, setBigRequests] = useState<TypePropsBigRequest[]>([]);
  const [reviews, setReviews] = useState<TypePropsReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bigRequestsData = await getBigRequests();
        const reviewsData = await getReviews();

        setBigRequests(bigRequestsData);
        setReviews(reviewsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="min-vh-100 my-4 cenetr-grid position-relative z-3">
    <div className="position-absolute circal-green z-2">
      <img src={circles} alt="" />
    </div>
    <div className="container-lg z-3">
      <h2 className="Trouve-titel mb-4 text-center text-md-start">Trouve quelqu’un qui <br />
       <span>répond à vos demandes</span></h2>
        <div className="row gap-4 gap-md-0 align-items-center">
          <div className="col-md-6">
          {!isLoading ? bigRequests.map((bigRequest) => (
          <BigRequestCard
            key={bigRequest.id}
            userName={bigRequest.userName}
            userLocation={bigRequest.userLocation}
            requestImageSrc={bigRequest.requestImageSrc}
            requestDescription={bigRequest.requestDescription}
            requestPublishedTime={bigRequest.requestPublishedTime}
            userImageSrc={bigRequest.userImageSrc}
          />
        )) : <BigRequestCardLoder />}
          </div>
          <div className="col-md-6 d-grid" style={{gap:'clamp(10px ,4vw , 20px)'}}>
          {!isLoading ? reviews.map((review) => (
          <ReviewCard
            key={review.id}
            userName={review.userName}
            userType={review.userType}
            userRate={review.userRate}
            userImageSrc={review.userImageSrc}
            reviewDescription={review.reviewDescription}
            reviewPublishedTime={review.reviewPublishedTime}
            isActive={review.isActive}
          />
        )) : <ReviewCardLoder /> }
          </div>
        </div>
    </div>
  </section>
  )
}

export default Trouve