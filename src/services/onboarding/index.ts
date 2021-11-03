import { onboardApiInstance } from '../../api';

export interface ICreateSessionPayload {
  fullName: string;
  number: string;
  email: string;
  brandName: string;
  password: string
}

export const getBrandDetails = async (brandId: string) => {
  const { data } = await onboardApiInstance.get(`/${brandId}`);
};

export const createSession = async (payload: ICreateSessionPayload) => {
  const {
    email, number, brandName, password, fullName,
  } = payload;
  const reqParam = {
    EmailId: email,
    PhoneNumber: number,
    BrandName: brandName,
    AccountPassword: password,
    UserName: fullName,
  };

  const { data } = await onboardApiInstance.post('/', reqParam);
  console.log('DATA', data);
  return data;
};
