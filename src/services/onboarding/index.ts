import { onboardApiInstance } from '../../api';
import { AccountInfo } from '../../redux/slices/brandOnboarding';

export interface IBrandInfoSessionPayload {
  name?: string;
  mobile?: string;
  brandName?: string;
  gstn?: string
  brandId?:string
}
export const createAccountSession = async (payload: AccountInfo) => {
  const {
    email, password,
  } = payload;
  const reqParam = {
    EmailId: email,
    Password: password,
  };

  const { data } = await onboardApiInstance.post('/', reqParam);
  debugger;// eslint-disable-line no-debugger
  // data = JSON.parse(data);

  const brandObj = JSON.parse(data.body);
  return brandObj;
};

export const getBrandDetails = async (brandId: string) => {
  const { data } = await onboardApiInstance.get(`/${brandId}`);
};

export const createBrandInfo = async (payload: IBrandInfoSessionPayload) => {
  const {
    mobile, brandName, gstn, name, brandId,
  } = payload;
  const reqParam = {
    Name: name,
    Mobile: mobile,
    BrandName: brandName,
    GSTN: gstn,
  };
  const { data } = await onboardApiInstance.patch(`/${brandId}/brandinfo`, reqParam);
  console.log('DATA', data);
  return data;
};

export const getBrandInfo = async (emailId:string) => {
  const { data } = await onboardApiInstance.get(`/BrandDetails/${emailId}`);
  console.log('DATA', data);
  return data;
};
