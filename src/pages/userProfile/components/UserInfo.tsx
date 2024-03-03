import React from 'react'

interface Props {
    name: string;
    iconClass: string; 
    customText: string; 
  }


const UserInfo: React.FC<Props> = ({ name, iconClass, customText }) => {
  return (
    <div className="flex-items  w-100 px-2 px-lg-4 mx-auto gap-1">
    <div className="flex-items gap-3">
      <div className={`py-1 px-2 rounded-circle bg-green-light text-white`}>
        <i className={iconClass} style={{ fontSize: "1.5rem" }}></i>
      </div>
      <p className="fw-medium fs-px-22 ln-ht-17px">{customText}</p>
    </div>
    <p className="fs-px-22 fw-medium ln-ht-17px text-capitalize ml-auto">{name}</p>
  </div>
  )
}

export default UserInfo