// apiService.ts
import axios from 'axios';
import { LocationData, PritaclerType, ProfileCardProps, User, associationType, interpriceInputForm } from '../types/Types';

const BASE_URL = 'http://localhost:3000';

export const getBigRequests = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bigRequests`);
    return response.data;
  } catch (error) {
    console.error('Error fetching big requests:', error);
    throw error;
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};


export const getAllPostes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getFavorisUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/favorisUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getAllUserOfferCard = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/UserOfferCard`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get<ProfileCardProps[]>(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const postUserData = async (email: string, password: string): Promise<void> => {
  const apiUrl = `${BASE_URL}/users`; 
   try {
    const response = await axios.post(apiUrl, {
      email,
      password,
    });
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};


export const postInterpriceUserData = async (data:interpriceInputForm): Promise<void> => {
  const apiUrl = `${BASE_URL}/interpriceusers`;
  try {
    const response = await axios.post(apiUrl, {
      ...data
    });
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};

export const postPritaclerUserData = async (data:PritaclerType): Promise<void> => {
  const apiUrl = `${BASE_URL}/PritaclerUser`;

  try {
    const response = await axios.post(apiUrl, {
      ...data
    });
    // You can handle success here if needed
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};

export const postAssociationUserData = async (data:associationType): Promise<void> => {
  const apiUrl = `${BASE_URL}/AssociationUser`; 

  try {
    const response = await axios.post(apiUrl, {
      ...data
    });
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};

export const getMessageUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/userapp`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getUserById = async (id:number) => {
  try {
    const response = await axios.get<User>(`${BASE_URL}/userapp?id=${id}`);    
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const postUserInfo = async (data:User): Promise<void> => {
  const apiUrl = `${BASE_URL}/users`; 
  try {
    const response = await axios.post(apiUrl, {
     ...data
    });
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get<User>(`${BASE_URL}/userapp`);  
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};


export const getLocationByPostalCode = async (postalCode: string): Promise<LocationData> => {
  const apiUrl = "https://api.zippopotam.us/FR"
  try {
    const response = await axios.get<LocationData>(`${apiUrl}/${postalCode}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching location for postal code ${postalCode}:`, error);
    throw error;
  }
};

