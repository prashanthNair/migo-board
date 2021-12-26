import axios from 'axios';

const isProduction: boolean = process.env.NODE_ENV === 'production';
const { hostname } = window.location;

const baseApiUrl = 'https://api.migobucks.com';
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
