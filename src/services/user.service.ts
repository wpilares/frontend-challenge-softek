import axios from 'axios';
import { type User } from '@types';

const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const getUser = async (): Promise<User> => {
  const url = `${BASE_URL}/user.json`;
  const response = await axios.get(url);
  return response.data;
};
