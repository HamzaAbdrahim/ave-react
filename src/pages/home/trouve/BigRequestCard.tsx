interface RequestCardProps {
  userName: string;
  userLocation: string;
  requestImageSrc: string;
  requestDescription: string;
  requestPublishedTime: string;
  userImageSrc: string;
}

const BigRequestCard: React.FC<RequestCardProps> = ({
  userName,
  userLocation,
  requestImageSrc,
  requestDescription,
  requestPublishedTime,
  userImageSrc,
}) => {
  return (
    <div className="Trouve-big-cart bg-white mx-auto mx-md-0">
      <div className="d-flex gap-2 p-4">
        <img src={userImageSrc} className="user-img" loading="lazy"  alt="" />
        <div>
          <p className="user-name">{userName}</p>
          <p className="user-loction">{userLocation}</p>
        </div>
      </div>
      <img src={requestImageSrc} loading="lazy"  className="request-img" alt="" />
      <div className="p-4 d-grid gap-3">
        <p className="request-discrption">{requestDescription}</p>
        <p className="request-pupliched">{requestPublishedTime}</p>
      </div>
    </div>
  );
};

export default BigRequestCard;
