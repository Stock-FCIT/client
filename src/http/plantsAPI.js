import { $authHost, $host } from './index';

export const fetchPlants = async () => {
  const { data } = await $host.get('api/plant');
  return data;
};
