import {
  createSlice, createSelector, createAsyncThunk, PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  createAccountSession, createBrandInfo, getBrandInfo, IBrandInfoSessionPayload, IBankInfoPayload, createKycBankSession,
} from '../../../services/onboarding';

interface Address {
  Street: string;
  City: string;
  State: string;
  PostalCode: number;
}

export interface IBrand {
  BrandId: string;
  Status: string;
  BrandName: string;
  Domain: string;
  Category: string;
  Country: string;
  EmailId: string;
  PhoneNumber: number;
  CountryCode: string;
  RegBusinessName: string;
  RegisteredType: string;
  BrandUrl: string;
  Tags: string;
  PAN: string;
  GST: string;
  Address: Address;
  UserName: string;
  AccountPassword: string;
  CreatedDate: string;
  LastUpdatedDate: string;
}
export interface IKycBank {
  BrandId:string;
  Category:string;
  beneficiaryname: string;
  accountholderame: string;
  branchifsccode: string;
  accountnumber: string
  UpdatedAt: string;
}

export interface BrandState {
    data?: IBrand;
    updatedAt?: Date
    accountInfo?: IBrand
}

export interface BankState {
  data?: IKycBank;
  updatedAt?: Date
}

export interface AccountInfo{
  email:string;
  password:string;
}

const initialState: BrandState = { };

export const createAccountSessionThunk = createAsyncThunk(
  '/brand',
  async (payload: AccountInfo) => {
    const response = await createAccountSession(payload);
    return response;
  },
);

export const createSessionThunk = createAsyncThunk(
  '/{BrandId}/brandinfo',
  async (payload: IBrandInfoSessionPayload) => {
    const response = await createBrandInfo(payload);
    return response;
  },
);

export const getBrandInfoThunk = createAsyncThunk(
  ' /brand/{emailId}',
  async (emailId: string) => {
    const response = await getBrandInfo(emailId);
    return response;
  },
);

export const createKycBankThunk = createAsyncThunk(
  '/bankdetails/{brandId}',
  async (payload: IBankInfoPayload) => {
    const response = await createKycBankSession(payload);
    return response;
  },
);

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createAccountSessionThunk.fulfilled, (state, action) => {
      state.accountInfo = action.payload;
    });
    builder.addCase(createSessionThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getBrandInfoThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(createKycBankThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Selectors
const getCurrentBrand = createSelector(
  (state: RootState) => state.Onboarding,
  (Onboarding) => Onboarding,
);

export default brandSlice.reducer;
