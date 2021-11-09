import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ICreateSessionPayload, createSession } from '../../../services/onboarding';

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

export interface BrandState {
    data?: IBrand;
    updatedAt?: Date
}

// Thunks
export const createSessionThunk = createAsyncThunk(
  'createSession',
  async (payload: ICreateSessionPayload) => {
    const response = await createSession(payload);
    return response;
  },
);

const initialState: BrandState = {};

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {

  },
});

// Selectors
const getCurrentBrand = createSelector(
  (state: RootState) => state.brand,
  (brand) => brand,
);

export default brandSlice.reducer;
