import React from 'react';
import type { RouteObject } from 'react-router-dom';
import CreateProduct from '../components/Invenatory/CreateProduct';

import Dashboard from '../pages/Dashboard';
import InventoryContainer from '../pages/InventoryContainer/Index';
import Orders from '../pages/Orders';
import OrderTracking from '../pages/OrderTracking';

export default [

  { path: '/container', element: <Dashboard /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/inventory', element: <InventoryContainer /> },
  { path: '/createProduct', element: <CreateProduct /> },
  { path: '/orders', element: <Orders /> },
  { path: '/orderTracking', element: <OrderTracking /> },
] as Array<RouteObject>;
