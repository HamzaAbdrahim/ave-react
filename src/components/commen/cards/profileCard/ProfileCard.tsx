import { Link } from 'react-router-dom'
import userImgBackup from '../../../../assets/Image-40.png'
import './profile_card.css'
import UserDetailsList from './UserDetailsList';
import { ProfileCardProps } from '../../../../types/Types';



const ProfileCard: React.FC<ProfileCardProps> = ({ user_img,
  name,
  rating,
  category,
  location,
  city,
  memberSince,
  avgResponseTime  }) => {
  return (
    <div className='ProfileCard p-3 text-center'>
      <div className='mb-2'>
      <img src={user_img || userImgBackup} className='size-100px rounded-circle' alt="" />
      </div>
      <h3 className='user-name'>{name}</h3>
      <div className='flex-items justify-content-center gap-2 my-1'>
        <button className='small-blue-button'>{category}</button>
        <div className='flex-items gap-1'>
          <p className='rate-gray'>{rating}</p>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <p className='contect-link'><Link to='/'> 
      <strong>{location}</strong></Link> •{city}</p>
      <hr className='line' />
      <ul>
      <UserDetailsList iconClassName="bi bi-person" title="Membre depuis" value={memberSince} />
      <UserDetailsList iconClassName="bi bi-geo-alt" title="De" value={city} />
      <UserDetailsList iconClassName="bi bi-clock" title="Moy. Temps de réponse" value={avgResponseTime} />
      </ul>
    </div>
  )
}

export default ProfileCard

