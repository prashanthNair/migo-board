/* eslint-disable consistent-return */
/* eslint-disable no-debugger */
import _ from 'lodash';
import { orderInsatnce } from '../../api';
import { IOrder } from '../../interfaces/IOrder';

export interface IOrderDetails {
  BrandId?:string;
  OrderID?: string;
}
export const getOrdersByBrandId = async (brandId: string) => {
  const { data } = await orderInsatnce.get(`/brand/${brandId}`);
  console.log(`Response: OrderByBrandID ${data.body}`);
  let orderData:any = [];
  debugger;
  if (data.body) {
    orderData = _.map(data.body, (x, index) => ({
      id: index,
      OrderId: x.OrderId || '',
      Location: x.DeliveryAddress?.City || '',
      Amount: x.Amount || '',
      OrderDate: x.OrderDate || '',
      Address: x.Address || '',
      Status: x.Status || '',
      Invoice: x.Invoice || '',
      Action: x.Action || '',
    }));
  }
  console.log('Orders', orderData);
  return orderData;
};
