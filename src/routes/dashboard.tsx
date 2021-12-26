import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventary/Index';

export default [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/inventory', element: <Inventory /> },
] as Array<RouteObject>;
