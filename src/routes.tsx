import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const FactoryPage = lazy(() => import('./pages/Factory/FactoryPage'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/factory',
    element: <FactoryPage />,
  },
];
