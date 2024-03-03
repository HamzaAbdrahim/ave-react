import { FC } from 'react';
import  masg_user_img from "../../../assets/masg-user-img.png";
import { MessageUserProps } from '../../../types/Types';
import { MassgesContext } from '../../../context/MassgesContext';


const MessageUser: FC<MessageUserProps> = ({ userName, userImage, onlineStatus,
   lastOnlineTime , userId }) => {
    const {toggolUser  , SelectedUser} = MassgesContext()
    console.log(SelectedUser);
    
  return (
    <div key={userId} onClick={() => toggolUser(userId)} className=
    {`msg-user cursor-pointer flex-items gap-3`}>
      <div className="position-relative masg_user_img">
        <img src={userImage || masg_user_img} className="img-fluid" alt={userName} />
        {onlineStatus && <span className="online-dot position-absolute"></span>}
      </div>
      <div>
        <h3 className="masg-user-name">{userName}</h3>
        <p className="data-left">{`En ligne à ${lastOnlineTime}`}</p>
      </div>
    </div>
  );
};

export default MessageUser;
