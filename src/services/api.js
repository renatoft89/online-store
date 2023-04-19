import axios from 'axios';

const URL_BASE = 'https://api.mercadolibre.com/sites/MLB/';

export const api = axios.create({
  baseURL: URL_BASE,
});

export const requestCategories = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const requestProductsCategories = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}
