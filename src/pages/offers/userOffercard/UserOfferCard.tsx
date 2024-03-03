import './user__offer__card.css'
import bigwhitearrow from "../../../assets/bigwhitearrow.png";
import CarsoulUser from './CarsoulUser';
import { UserOfferCardTypes } from '../../../types/Types';




const UserOfferCard: React.FC<UserOfferCardTypes> = ({ title, description, users }) => {
  return (
    <div className='UserOfferCard mt-5'>
      <h1 className='titel'>{title}</h1>
      <p className='discrption mt-2'>{description}</p>
      <div className='carsoul-users d-flex overflow-hidden gap-3 w-100 mt-3 position-relative'>
        <div className='w-25 h-100 bigwhite__arrow'>
          <img src={bigwhitearrow} alt="" />
        </div>
        {users.map((user, index) => (
          <CarsoulUser key={index} name={user.name} rating={user.rating} type={user.type} 
          online={user.online} link={user.link} workingImages={user.workingImages} id={user.id} />
        ))}
      </div>
    </div>
  )
}

export default UserOfferCard