import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

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

const initialState: BrandState = {};

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {

  },
});

const getCurrentBrand = createSelector(
  (state: RootState) => state.brand,
  (brand) => brand,
);

export default brandSlice.reducer;
