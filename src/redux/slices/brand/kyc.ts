import {
  createSlice, createSelector, createAsyncThunk, PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ICreateSessionPayload, createKycBusinessSession } from '../../../services/onboarding/kyc';

export interface IKyc {
    BrandId: string;
   Category:string;
   businessname: string;
    category: string;
    businessdescription: string;
    website: string
    UpdatedAt: string;
  }

export interface KycState {
    data?: IKyc;
    updatedAt?: Date
}

export const createKycThunk = createAsyncThunk(
  'createSession',
  async (payload: ICreateSessionPayload) => {
    const response = await createKycBusinessSession(payload);
    return response;
  },
);

const initialState: KycState = {};

const kycSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    postBusinessOvervie(state, action: PayloadAction<IKyc>) {
      state.data = action.payload;
    },

  },
});

export default kycSlice.reducer;
