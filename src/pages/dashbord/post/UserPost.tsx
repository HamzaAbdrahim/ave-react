import './post.css';
import SocialTab from './SocialTab/SocialTab';
import PostImges from './PostImges';
import { UserPostProps } from '../../../types/Types';
import CommentSection from './CommentSection';

const UserPost: React.FC<UserPostProps> = ({
  userName,
  postTime,
  userLocation,
  postDescription,
  postImage,
  userImagePost
}) => {
  return (
    <div  className="user-post mt-4">
      <div className="row p-4">
        <div className="col-2 col-sm-2 col-xl-1 px-0 text-center">
          <img
            src={userImagePost}
            className="user-post-img img-fluid"
            style={{ height: 'clamp(40px, 4vw, 60px)' }}
            alt=""
          />
        </div>
        <div className="col-10 col-sm-10 col-xl-11">
          <div className="flex-items">
            <h1 className="user-name flex-1">{userName}</h1>
            <p className="publich-time">{postTime}</p>
          </div>
          <span className="user-loction">{userLocation}</span>
        </div>
      </div>
      <PostImges 
      images={postImage}        
        />
      <SocialTab postDescription={postDescription} />
      <CommentSection />
    </div>
  );
};

export default UserPost;


