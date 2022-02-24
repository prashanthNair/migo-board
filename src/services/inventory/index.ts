import { v4 as uuidv4 } from 'uuid';
import { inventoryApiInstance, mockData } from '../../api';
import { IProduct } from '../../interfaces/IProduct';
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
  // product = {
  //   ProductId: 'P1641395632969',
  //   SGST: 5,
  //   TraceId: 'dbecbd21-cd9f-4895-92ea-238befe96146',
  //   GST: 10,
  //   ComboProduct: [
  //     {
  //       MRP1: 11111111,
  //       Domain1: 'Grocery123',
  //       Price1: 11111111,
  //       Title1: 'Iphone 11, 32 GB RAM',
  //       Rating1: '5',
  //     },
  //     {
  //       MRP1: 11111111,
  //       Domain1: 'Grocery123',
  //       Price1: 11111111,
  //       Title1: 'Iphone 11, 32 GB RAM',
  //       Rating1: '5',
  //     },
  //   ],
  //   Stock: 500,
  //   MRP: 3000,
  //   Status: 'Active',
  //   ProductCategory: 'Mac',
  //   BrandId: 'B001',
  //   KeyPoints: [
  //     '',
  //     '',
  //   ],
  //   IGST: 5,
  //   Title: 'Iphone 11, 32 GB RAM',
  //   CreatedDate: '2022-01-05T15:13:52.969Z',
  //   ProductName: 'Iphone 11',
  //   Tag: "Men's Clothing",
  //   ImageLinks: [
  //     {
  //       name: '',
  //       url: '',
  //     },
  //   ],
  //   Price: 11111111,
  //   BrandName: 'Sony',
  //   ProductType: 'Combo',
  //   Category: 'TV',
  //   BuddyMargin: 55,
  // };
  // const addProductInput:IProduct = {
  //   ProductName: product.ProductName,
  //   ProductType: product.ProductType,
  //   BrandName: product.BrandName,
  //   BrandId: product.BrandId,
  //   Category: product.Category,
  //   ProductCategory: product.ProductCategory,
  //   Tittle: product.Tittle,
  //   TraceId: uuidv4(),
  //   KeyPoints: product.KeyPoints,
  //   Stock: product.Stock,
  //   MRP: product.MRP,
  //   GST: product.GST,
  //   IGST: product.IGST,
  //   SGST: product.SGST,
  //   Price: product.Price,
  //   Tags: product.Tags,
  //   BuddyMargin: product.BuddyMargin,
  //   LoyalityPoint: product.LoyalityPoint,
  // };
  const { data } = await inventoryApiInstance.post('/product', product);
  return data;
};

export const inventroyHealth = async () => {
  const { data } = await inventoryApiInstance.get('/health/');

  return data;
};
