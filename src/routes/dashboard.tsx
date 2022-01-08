import React from 'react';
import type { RouteObject } from 'react-router-dom';
import CreateProduct from '../components/Products/CreateProduct';

import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventary/Index';

export default [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/inventory', element: <Inventory /> },
  { path: '/createProduct', element: <CreateProduct /> },
] as Array<RouteObject>;
