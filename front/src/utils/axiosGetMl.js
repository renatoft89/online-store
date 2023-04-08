import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.mercadolibre.com/sites/MLB/`,
});

export const apiGetCategories = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}
