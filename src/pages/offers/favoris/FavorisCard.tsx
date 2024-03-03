import { useState, useEffect } from 'react';
import { getFavorisUsers } from '../../../service/apiService';
import UserFavorisProfile from './UserFavorisProfile';
import { UserFavorisProfileProps } from '../../../types/Types';
import './favoris__card.css'
import FavorisCardLoder from '../../../components/commen/sklitionsLoders/FavorisCardLoder';

const FavorisCard = () => {
    const [favorisUsers, setFavorisUsers] = useState<UserFavorisProfileProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchFavorisUsers = async () => {
        try {
          const favorisUsersData = await getFavorisUsers();
          setFavorisUsers(favorisUsersData);
        } catch (error) {
        setLoading(false);
          console.error('Error fetching favoris users:', error);
        } finally {
            setLoading(false);
          }
      };
  
      fetchFavorisUsers();
    }, []);
  return (
    <div className='box'>
        <div className='flex-items justify-content-center gap-3'>
        <i className="bi bi-star-fill fs-2rem"></i>
        <h3 className='offer-titel'>Mes offreurs favoris</h3>
        </div>
        <hr className='mb-4' />
        <div className='d-grid gap-3'>
        {!loading ? favorisUsers.map((user) => (
         <UserFavorisProfile key={user.id} {...user} />
      )) : <FavorisCardLoder />}
        </div>
    </div>
  )
}

export default FavorisCard