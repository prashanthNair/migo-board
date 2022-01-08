import {
  createSlice, createSelector, createAsyncThunk, PayloadAction,
} from '@reduxjs/toolkit';
import { getProducts } from '../../../services/inventory';
import { RootState } from '../../store';

interface IProductsPayyload{
  BrandId?:string;
}
const initialState = {
  data: {
    Exclusive: {},
    Combo: {},
  },
};

// eslint-disable-next-line import/prefer-default-export
export const getProductsThunk = createAsyncThunk(
  ' /inventory/{BrandId}',
  async (payload: IProductsPayyload) => {
    const response = await getProducts(payload);
    return response;
  },
);
const productSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default productSlice.reducer;
