import { onboardApiInstance } from '../../api';
import { AccountInfo } from '../../redux/slices/brand';

export interface IBrandInfoSessionPayload {
  name?: string;
  mobile?: string;
  brandName?: string;
  gstn?: string
  brandId?:string
}

export interface IBankInfoPayload {
  beneficiaryname?: string;
  accountholderame?: string;
  branchifsccode?: string;
  accountnumber?: string;
  BrandId?:string;
}

export interface IBusinessOverviewInfoPayload {
  BrandId?:string;
  website?: string;
  businessDiscription?: string;
  businessName?: string;
  businessCategory?: string;
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

export const createKycBankSession = async (payload: IBankInfoPayload) => {
  const {
    beneficiaryname, accountholderame, branchifsccode, accountnumber, BrandId,
  } = payload;
  const reqParam = {
    BankDetails: {
      BeneficiaryName: beneficiaryname,
      AccountHolderame: accountholderame,
      BranchIfscCode: branchifsccode,
      AccountNumber: accountnumber,
    },
  };
  const { data } = await onboardApiInstance.patch(`/bankdetails/${BrandId}`, reqParam);
  console.log('DATA', data);
  return data;
};

export const createKycBusinessOverviewSession = async (payload: IBusinessOverviewInfoPayload) => {
  const {
    website, businessDiscription, businessName, businessCategory, BrandId,
  } = payload;
  const reqParam = {
    BusinessOverview: {
      Website: website,
      BusinessDiscription: businessDiscription,
      BusinessName: businessName,
      BusinessCategory: businessCategory,
    },
  };
  const { data } = await onboardApiInstance.patch(`/kycdetails/${BrandId}/businessOverview`, reqParam);
  console.log('DATA', data);
  return data;
};
