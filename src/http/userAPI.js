import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (name, email, phone, password) => {
  const { data } = await $host.post('api/user/registration', {
    name,
    email,
    phone,
    password,
    role: 'ADMIN',
  });
  localStorage.setItem('token', data.token);
  const decode = jwt_decode(data.token);
  localStorage.setItem('userId', decode.id);
  return decode;
};

export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  const decode = jwt_decode(data.token);
  localStorage.setItem('userId', decode.id);
  return decode;
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');

  const decode = jwt_decode(data.token);
  localStorage.setItem('userId', decode.id);
  return decode;
};

export const getUserInfo = async () => {
  const id = localStorage.getItem('userId');
  if (id) {
    const { data } = await $host.get(`api/user/${id}`);
    return data;
  }
  return null;
};

export const updateUserInfo = async (name, email, phone, country, city, address) => {
  const id = localStorage.getItem('userId');
  if (id) {
    const { data } = await $host.patch(`api/user/update/${id}`, {name, email, phone, country, city, address});
    return data;
  }
  return null;
};

export const updateUserPassword = async (currentPassword, password) => {
  const id = localStorage.getItem('userId');
  if (id) {
    const { data } = await $host.patch(`api/user/updatePassword/${id}`, {currentPassword, password});
    return data;
  }
  return null;
};