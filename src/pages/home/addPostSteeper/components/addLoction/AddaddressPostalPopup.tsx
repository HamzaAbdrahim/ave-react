import React, { useState } from 'react';
import Inputlabel from '../../../../../components/commen/ui/Inputlabel';
import { AddPostContext } from '../../../../../context/AddPostSteeperContext';
import { getLocationByPostalCode } from '../../../../../service/apiService';
import { LocationData } from '../../../../../types/Types';

const AddaddressPostalPopup: React.FC = () => {
  const { IsAddloctionPopup, toggleIsAddloctionPopup } = AddPostContext();
  const [postalCode, setPostalCode] = useState<string>('');
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  
    // Check if the input value is a number
    if (!isNaN(Number(inputValue))) {
      const numericValue = Number(inputValue);
  
      // Check if the number is within the specified range
      if (numericValue >= 1000 && numericValue <= 98799) {
        setPostalCode(inputValue);
        setError(null); // Clear any previous validation errors
      } else {
        setPostalCode('');
        setError('Postal code must be between 01000 and 98799.');
      }
    } else {
      setPostalCode('');
      setError('Postal code must be a number.');
    }
    setPostalCode(event.target.value);
  };
  

  const handleSaveClick = async () => {
    try {
      const data: LocationData = await getLocationByPostalCode(postalCode);
      setLocationData(data);
      console.log(data);
    } catch (err: any) {
      setError(err.message);
      console.error('Error:', err);
    }
  };

  return (
    <div className={`animate__animated ${IsAddloctionPopup ? 'animate__slideInDown' : ' animate__slideOutDown'}`}>
      <div className="flex-items justify-content-between">
        <button onClick={handleSaveClick} className="clr-green-light fw-medium fs-px_18 lh-base">
          Save
        </button>
        <button onClick={toggleIsAddloctionPopup}>
          <i className="bi bi-x-lg" style={{ fontSize: 'min(40px, 20px)' }}></i>
        </button>
      </div>
      <div className="mt-2">
        <Inputlabel
          name=""
          type="text"
          label="Enter your postal address"
          value={postalCode}
          onChange={handleInputChange}
          error={error}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error === "Request failed with status code 404" ? "not found" : error}</div>}
      {locationData && (
    <div className='animate__animated animate__slideInDown main__border mt-1 w-100 shadow-lg rounded-4'>
    {locationData.places.map((place) => (
      <p onClick={() => console.log(place)} key={place['place name']} className='fw-bold px-3 py-2 fs-px-16 ln-ht-17px cursor-pointer '>
        {place['place name']} <br />
        <span className='clr-gray-300 fw-medium mt-1 sp-letter-05'>{place.state}</span>
      </p>
    ))}
  </div>
)}
    </div>
  );
};

export default AddaddressPostalPopup;
