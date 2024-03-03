// UserDetailsList.tsx

import React from 'react';

interface UserDetailsListProps {
  iconClassName: string;
  title: string;
  value: string;
}

const UserDetailsList: React.FC<UserDetailsListProps> = ({ iconClassName, title, value }) => {
  return (
    <li className='d-lg-flex align-items-center flex-column flex-sm-row mb-2 mb-sm-0
     justify-content-center justify-content-sm-between  gap-2'>
      <div className='d-flex align-items-center flex-column flex-sm-row user-deatiles
       gap-sm-3 flex-1'>
        <i className={iconClassName}></i>
        <p>{title}</p>
      </div>
      <span><strong>{value}</strong></span>
    </li>
  );
}

export default UserDetailsList;
