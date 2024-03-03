import { Link } from 'react-router-dom'
import user_img from '../../../assets/Image-40.png'
import './offreurs_cards.css'

const OffreursCards = () => {
  return (
    <div className='OffreursCards mt-3'>
      <h1 className='Offreur-titel mb-4'>Réponses d’offreurs</h1>
      <div className='OffreursCards-container'>
        <div className='offerUser-Card'>
        <div className='mb-2'>
      <img src={user_img} className='user-img' alt="" />
      </div>
      <h3 className='user-name'>Fernando Gaucho</h3>
      <div className='flex-items justify-content-center gap-2 my-1'>
        <button className='small-blue-button'>Auto-Entreprise</button>
        <div className='flex-items gap-1'>
          <p className='rate-gray'>(4.3)</p>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <p className='contect-link'><Link to='/'> 
      <strong>Menage</strong></Link> •Givors (Canal)</p>
        </div>
        <div className='offerUser-Card'>
        <div className='mb-2'>
      <img src={user_img} className='user-img' alt="" />
      </div>
      <h3 className='user-name'>Fernando Gaucho</h3>
      <div className='flex-items justify-content-center gap-2 my-1'>
        <button className='small-blue-button'>Auto-Entreprise</button>
        <div className='flex-items gap-1'>
          <p className='rate-gray'>(4.3)</p>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <p className='contect-link'><Link to='/'> 
      <strong>Menage</strong></Link> •Givors (Canal)</p>
        </div>
        <div className='offerUser-Card'>
        <div className='mb-2'>
      <img src={user_img} className='user-img' alt="" />
      </div>
      <h3 className='user-name'>Fernando Gaucho</h3>
      <div className='flex-items justify-content-center gap-2 my-1'>
        <button className='small-blue-button'>Auto-Entreprise</button>
        <div className='flex-items gap-1'>
          <p className='rate-gray'>(4.3)</p>
          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <p className='contect-link'><Link to='/'> 
      <strong>Menage</strong></Link> •Givors (Canal)</p>
        </div>
      </div>
    </div>
  )
}

export default OffreursCards