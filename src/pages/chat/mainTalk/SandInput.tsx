import { useState, ChangeEvent } from "react";
import  blueAdd from "../../../assets/blue__add.png";
import  blueSend from "../../../assets/blue__send.png";
const SandInput = () => {
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      console.log('Message sent:', message);
      setMessage('');
    } else {
      alert('Please enter a valid message before sending.');
    }
  };
  
  return (
    <div className="sand__input__conatiner flex-items justify-content-between">
    <div className="add__container cursor-pointer">
      <img src={blueAdd} alt="" className="add--img" />
    </div>
    <input type="text" onChange={handleInputChange} className="sand__input w-100 mx-4" placeholder="Écrivez votre message ici"/>
    <div role="button" onClick={handleSendMessage} className="sand__img cursor-pointer">
    <img src={blueSend} alt="" className="sand--img" />
    </div>
  </div>
  )
}

export default SandInput