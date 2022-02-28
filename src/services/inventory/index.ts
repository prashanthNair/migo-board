  
import { v4 as uuidv4 } from 'uuid';
import { inventoryApiInstance, mockData } from '../../api';
import { IProductsPayyload } from '../../interfaces/IProductsPayyload';
// eslint-disable-next-line import/prefer-default-export
export const getProducts = async (payload:IProductsPayyload) => {
  const {
    BrandId,
  } = payload;
  const { data } = await inventoryApiInstance.get(`products/brand/${BrandId}`);
  console.log('DATA', data);
  return data;
};

export const getCategories = async () => {
  const { data } = await mockData.get('');
  // const { data } = await inventoryApiInstance.get('category');
  console.log('DATA', data);
  return data;
};

export const postProduct = async (product: any) => {
  const { data } = await inventoryApiInstance.post('/product', product);
  return data;
};

export const inventroyHealth = async () => {
  const { data } = await inventoryApiInstance.get('/health/');

  return data;
};
