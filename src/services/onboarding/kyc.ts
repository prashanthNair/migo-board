import { kycApiInstance } from '../../api';

export interface ICreateSessionPayload {
    businessname: string;
    category: string;
    businessdescription: string;
    website: string
}

export const createKycBusinessSession = async (payload: ICreateSessionPayload) => {
  const {
    businessname, category, businessdescription, website,
  } = payload;
  const reqParam = {
    BusinessName: businessname,
    Category: category,
    BusinessDescription: businessdescription,
    Website: website,
  };

  const { data } = await kycApiInstance.post('/', reqParam);
  console.log('DATA', data);
  return data;
};
