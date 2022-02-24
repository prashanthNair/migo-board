/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOrder } from '../../../interfaces/IOrder';
import { getOrdersByBrandId } from '../../../services/orderTracking';

interface IProductsPayyload {
    BrandId?: string;
  }
const order:IOrder = {
  OrderId: ' ',
  Location: ' ',
  Amount: '',
  OrderDate: '',
  Address: '',
  Status: ' ',
  Invoice: ' ',
  Action: ' ',
};
const initialState: any = {
  Orders: order,
};

export const getOrdersByBrandIdThunk = createAsyncThunk(
  ' /order/brand/{BrandId}',
  async (payload: string) => {
    const response = await getOrdersByBrandId(payload);
    return response;
  },
);

const orderTrackingSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    debugger;
    builder.addCase(getOrdersByBrandIdThunk.fulfilled, (state, action) => {
      debugger;
      state.Orders = action.payload;
    });
  },
});

export default orderTrackingSlice.reducer;
