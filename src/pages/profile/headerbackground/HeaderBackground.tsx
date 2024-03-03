import avé from '../../../assets/avé.png'
import logo_icon from '../../../assets/icon.png'
import big_logo_icon from '../../../assets/icon.png'

import './headerbackground.css'

const HeaderBackground = () => {
  return (
    <div className="header__background position-relative py-2">
      <img src={avé} className="titel__img" alt="header logo" />
        <img src={big_logo_icon} className='bigest__logo' alt="" />
        <img src={logo_icon} className='small__logo__1' alt="" />
        <img src={logo_icon} className='small__logo__2' alt="" />
        <img src={logo_icon} className='small__logo__3' alt="" />
    </div>
  )
}

export default HeaderBackground