import axios from 'axios';

const isProduction: boolean = process.env.NODE_ENV === 'production';
const { hostname } = window.location;

const baseApiUrl = 'https://api.migobucks.com';
// const baseApiUrl = 'http://127.0.0.1:3000/dev';
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
  baseURL: 'https://sn0f48vlw6.execute-api.ap-south-1.amazonaws.com/dev',
});

export const authorizerInsatnce = axios.create({
  baseURL: getBaseApiUrl('authorizer'),
});

export const orderInsatnce = axios.create({
  baseURL: 'https://pkcqdzbd08.execute-api.ap-south-1.amazonaws.com/dev',
});
export const kycApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand/businessDetails'),
});

export const mockData = axios.create({
  baseURL: './mockData/category.json',
});
