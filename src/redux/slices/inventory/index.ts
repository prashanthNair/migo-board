/* eslint-disable no-debugger */
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  PayloadAction,
  Selector,
} from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces/IProduct';
import {
  getCategories,
  getProducts,
  inventroyHealth,
  postProduct,
} from '../../../services/inventory';
import { RootState } from '../../store';

interface IProductsPayyload {
  BrandId?: string;
}

const initialState = {
  data: {
    Exclusive: [],
    Combo: [],
  },
  product: {
    ProductDetails: {},
    VarriantDetails: {},
    PricingAndShipingDetails: {},
    AdditionalInfo: {},
  },
  productDetails: {},
  category: [],
};

// eslint-disable-next-line import/prefer-default-export
export const getProductsByBrandIdThunk = createAsyncThunk(
  ' /inventory/{BrandId}',
  async (payload: IProductsPayyload) => {
    const response = await getProducts(payload);
    return response;
  },
);
export const createProductThunk = createAsyncThunk(
  '/product',
  async (payload: IProduct) => {
    const response = await postProduct(payload);
    return response;
  },
);

export const productCategoriesThunk = createAsyncThunk(
  '/inventory/ProductCategories',
  async () => {
    const response = await getCategories();
    return response;
  },
);

export const inventoryHealthThunk = createAsyncThunk(
  '/inventory/health/',
  async () => {
    const response = await inventroyHealth();
    return response;
  },
);
const productSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    ProductDetails: (state, action) => {
      state.product.ProductDetails = action.payload;
    },
    VarriantDetails: (state, action) => {
      state.product.VarriantDetails = action.payload;
    },
    AdditionalInfo: (state, action) => {
      state.product.AdditionalInfo = action.payload;
    },
    PricingAndShipingDetails: (state, action) => {
      state.product.PricingAndShipingDetails = action.payload;
    },
    ProductDetailsData: (state, action) => {
      debugger;
      state.productDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByBrandIdThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(productCategoriesThunk.fulfilled, (state, action) => {
      state.category = action.payload;
    });

    builder.addCase(createProductThunk.fulfilled, (state, action) => {
      state.product = action.payload;
    });

    builder.addCase(inventoryHealthThunk.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export const {
  ProductDetails,
  VarriantDetails,
  AdditionalInfo,
  PricingAndShipingDetails,
  ProductDetailsData,
} = productSlice.actions;
export default productSlice.reducer;

export const selectProductByID = createSelector(
  [(state: RootState) => state.inventory.data.Exclusive, (state, producId) => producId],
  (products, producId) => products.filter((post:any) => post.ProducId === producId),
);
