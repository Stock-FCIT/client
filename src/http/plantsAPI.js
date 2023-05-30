import { $authHost, $host } from './index';

export const fetchPlants = async (categoryId, sortId) => {
  const { data } = await $host.get(
    `api/plant?categoryId=${categoryId ? categoryId : ''}&sort=${sortId ? sortId.toLowerCase() : ''}`,
  );
  return data;
};

export const fetchOnePlant = async (plantId) => {
  const { data } = await $host.get(`api/plant/${plantId}`);
  return data;
};

export const fetchCategory = async () => {
  const { data } = await $host.get('api/category');
  return data;
};
