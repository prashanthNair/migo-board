import {
  createSlice, createSelector, createAsyncThunk, PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
// import { ICreateSessionPayload, createSession } from '../../../services/onboarding/kyc';
import { createKycBankSession, ICreateSessionPayload } from '../../../services/onboarding/bank';

export interface IKycBank {
    BrandId:string;
    Category:string;
    beneficiaryname: string;
    accountholderame: string;
    branchifsccode: string;
    accountnumber: string
    UpdatedAt: string;
  }

export interface BankState {
    data?: IKycBank;
    updatedAt?: Date
}

export const createKycBankThunk = createAsyncThunk(
  'createSession',
  async (payload: ICreateSessionPayload) => {
    const response = await createKycBankSession(payload);
    return response;
  },
);

const initialState: BankState = {};

const kycBankSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    postBankDetails(state, action: PayloadAction<IKycBank>) {
      state.data = action.payload;
    },

  },
});

export default kycBankSlice.reducer;
