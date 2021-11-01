import React from 'react';
import type { RouteObject } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

export default [
  { path: '/dashboard', element: <Dashboard /> },
] as Array<RouteObject>;
