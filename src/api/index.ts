import axios from 'axios';

const isProduction: boolean = process.env.NODE_ENV === 'production';
const { hostname } = window.location;

const baseApiUrl = process.env.API_BASE_URL;
const applicationDomain = process.env.APP_DOMAIN;

export const getBaseApiUrl = (path?: string) => {
  if (hostname === applicationDomain && isProduction) {
    return `${baseApiUrl}/prod/${path}`;
  }
  return `${baseApiUrl}/dev/${path}`;
};

export const onboardApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand'),
});
