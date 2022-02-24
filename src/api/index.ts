import axios from 'axios';

const isProduction: boolean = process.env.NODE_ENV === 'production';
const { hostname } = window.location;

// const baseApiUrl = 'https://api.migobucks.com';
const baseApiUrl = 'http://127.0.0.1:3000/dev';
const applicationDomain = 'brands.migobucks.com';

export const getBaseApiUrl = (path?: string) => {
  if (hostname === applicationDomain && isProduction) {
    return `${baseApiUrl}/prod/${path}`;
  }
  return `${baseApiUrl}/${path}`;
};

export const onboardApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand'),
});

export const inventoryApiInstance = axios.create({
  baseURL: getBaseApiUrl(''),
});

export const authorizerInsatnce = axios.create({
  baseURL: getBaseApiUrl('authorizer'),
});

export const orderInsatnce = axios.create({
  baseURL: getBaseApiUrl('order'),
});
export const kycApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand/businessDetails'),
});

export const mockData = axios.create({
  baseURL: './mockData/category.json',
});
