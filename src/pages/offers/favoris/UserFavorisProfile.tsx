import React from 'react';
import { UserFavorisProfileProps } from '../../../types/Types';



const UserFavorisProfile: React.FC<UserFavorisProfileProps> = ({ userName, userType, userLocation, userImage , id }) => (
  <div key={id} className='flex-items gap-3'>
    <img src={userImage} className='w-40' alt="" />
    <div>
      <div className='flex-items gap-2'>
        <h4 className='user-name'>{userName}</h4>
        <button className='verySmall-button'>{userType}</button>
      </div>
      <p className='user-loction'>{userLocation}</p>
    </div>
  </div>
);

export default UserFavorisProfile;
