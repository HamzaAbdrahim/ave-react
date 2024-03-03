import Navbar from "../pages/dashbord/navbar/Navbar";
import user__background from '../assets/Rectangle 191.png';
import user__img from '../assets/Ellipse 54.png';
import styles from '../pages/userProfile/account.module.css';
import { Link } from "react-router-dom";
import UserInfo from "../pages/userProfile/components/UserInfo";
import { useState } from "react";
import EditUserInfo from "../pages/userProfile/components/EditUserInfo";

const AccountLayout = () => {
  const [isEditInfo, setEditInfo] = useState<boolean>(false);

  const handleClick = () => {
    setEditInfo(!isEditInfo);
  };
  const people = [
    { id: 1, name: "John", iconClass: "bi bi-person", customText: "Engineer" },
    { id: 2, name: "Jane", iconClass: "bi bi-person", customText: "Designer" },
  ];
  return (
    <>
      <Navbar />
      <div className={`main-page mobile-flex-col position-relative overflow-hidden flex-items 
      justify-content-center py-4`}>
        <div className="col-lg-8 col-11 mx-auto bg-white shadow-lg pb-2 rounded-5">
          <div className={styles.userBackground}>
            <img src={user__background} alt="" className="h-100" />
          </div>
          <div className={styles.profileUser + " text-center"}>  {/* Concatenate the class names */}
            <img src={user__img} alt="" />
          </div>
          <div className="flex-items px-2 px-lg-4 mt-2 justify-content-between flex-wrap gap-1">
            <p className="fw-medium fs-px_20 ln-ht-20px">Informations personels</p>
            <Link onClick={handleClick} to={""}
             className={`${isEditInfo && 'outline'} medium-blue-button d-grid place-items-center`}>
              Modifire
            </Link>
          </div>
          {isEditInfo ? (
            <div className="mt-3 animate__animated animate__zoomIn d-grid gap-2">
          {people.map(person => (
        <UserInfo
          key={person.id}
          name={person.name}
          iconClass={person.iconClass}
          customText={person.customText}
        />
      ))}
          </div>
          ) : (
            <EditUserInfo />
          )}
          
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
