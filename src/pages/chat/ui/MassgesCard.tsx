import { Link } from "react-router-dom"
import { User } from "../../../types/Types"

const MassgesCard: React.FC<User> = (User) => {      
  return (
    <div key={User[0].id} className='offerUser-Card bg-white rounded-3 p-3 text-center'>
        <div className='mb-2'>
          <img src={User[0].userImg} className='user-img' 
          style={{ width: '101px', aspectRatio: '1' }} alt={User[0].userName} />
        </div>
        <h3 className='user-name'>{User[0].userName}</h3>
        <div className='flex-items justify-content-center gap-2 my-1'>
          <button className='small-blue-button'>Auto-{User[0].userType}</button>
          <div className='flex-items gap-1'>
            <p className='rate-gray'>({User[0].rating})</p>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <p className='contect-link'>
          <Link to='/'>
            <strong>Menage</strong>
          </Link> •Givors (Canal)
        </p>
      </div>
  )
}

export default MassgesCard