import axios from 'axios';

const isProduction: boolean = process.env.NODE_ENV === 'production';
const { hostname } = window.location;

const baseApiUrl = 'https://pt504ydu4f.execute-api.ap-south-1.amazonaws.com';
const applicationDomain = 'brands.migobucks.com';

export const getBaseApiUrl = (path?: string) => {
  if (hostname === applicationDomain && isProduction) {
    return `${baseApiUrl}/prod/${path}`;
  }
  return `${baseApiUrl}/dev/${path}`;
};

export const onboardApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand'),
});

export const kycApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand/businessDetails'),
});

// BrandId in PathParam
export const kycbankApiInstance = axios.create({
  baseURL: getBaseApiUrl('brand/bankdetails/'),
});
