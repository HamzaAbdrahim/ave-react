import { useState } from 'react';
import arrow__down from '../../../assets/Vector (1).png';


const PinnedItemsCart = () => {
          // Define state and toggle function
          const [isShow, setShow] = useState<boolean>(false);

          // Toggle function
          const handleToggle = () => {
            setShow(!isShow);
          };
  return (
    <div >
    <div onClick={handleToggle} className="flex-items cursor-pointer rounded-corners_1rem  
    justify-content-between
     py-3 bg-white px-4 ">
      <h3 className="fs-3">Pinned Items</h3>
      <img src={arrow__down} alt="arrow down" />
    </div>
    <div className={`restof_Content bg-white ${isShow ? 'active' : ''}`}>
      <div className='flex-items mb-2 gap-3'>
        <button className='downlode__button'>
        <i className="bi bi-download fs-3"></i>
        </button>
        <p className='fw-medium text-black fs-px_14'>loding.page.zip</p>
      </div>
      <div className='flex-items mb-2 gap-3'>
        <button className='downlode__button'>
        <i className="bi bi-download fs-3"></i>
        </button>
        <p className='fw-medium text-black fs-px_14'>loding.page.zip</p>
      </div>
      <div className='flex-items gap-3'>
        <button className='downlode__button'>
        <i className="bi bi-download fs-3"></i>
        </button>
        <p className='fw-medium text-black fs-px_14'>loding.page.zip</p>
      </div>
    </div>
  </div>
  )
}

export default PinnedItemsCart