import { $authHost, $host } from './index';
import { fetchPlants } from './plantsAPI';

export const getFavouritePlants = async () => {
  const id = localStorage.getItem('userId');
  if (id) {
    const { data } = await $host.get(`api/favorite/${id}`);
    return data;
  }
  return null;
};

export const setFavouritePlants = async (plantId) => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    const { data } = await $host.post(`api/favorite/`, { userId, plantId });
    return data;
  }
};

export const deleteFavouritePlants = async (plantId) => {
  const userId = Number(localStorage.getItem('userId'));

  if (userId) {
    const { data } = await $host.delete(`api/favorite/${userId}/${plantId}`);
    return data;
  }
};

export const getAllFavouritePlants = async () => {
  const allFavourites = await getFavouritePlants().then(data => data.map(item => item.plantId));
  const allPlants = await fetchPlants().then(data => data.rows.map(item => item));

  const favouritePlants = allPlants.filter((plant) => {
    return allFavourites.includes(plant.id);
  });

  return favouritePlants;
};
