import { RouteObject } from 'react-router-dom';

import basicRoutes from './basic';
import dashboardRoutes from './dashboard';

const routes: RouteObject[] = [...basicRoutes, ...dashboardRoutes];

export default routes;
