import { FC } from "react";

type Props = {
  UserImage: string;
  userTitel: string;
  JobRole: string;
  UserTages: string[];
};

const UserCarsoul: FC<Props> = ({ UserImage, UserTages, userTitel, JobRole }) => {
  return (
    <div className="user-card position-relative">
      <img src={UserImage} className="user-img" alt="" />
      <div className="inner-content position-absolute">
        <h4 className="shadow-userTitel">{userTitel}</h4>
        <span className="job-name">{JobRole}</span>
        <div className="flex-items mt-3 gap-2 flex-wrap">
          {UserTages.map((item: string, index: number) => (
            <span key={index} className="user-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCarsoul;
