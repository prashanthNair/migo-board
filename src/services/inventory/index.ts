import { inventoryApiInstance, onboardApiInstance } from '../../api';

export interface IProducts {
  BrandId?:string;
}

// eslint-disable-next-line import/prefer-default-export
export const getProducts = async (payload:IProducts) => {
  const {
    BrandId,
  } = payload;
  const { data } = await inventoryApiInstance.get(`products/brand/${BrandId}`);
  console.log('DATA', data);
  return data;
};
