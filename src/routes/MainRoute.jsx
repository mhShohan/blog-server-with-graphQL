import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from '../pages/admin';
import Attendance from '../pages/attendance';
import Employee from '../pages/employee';
import Expense from '../pages/expense';
import Inventory from '../pages/inventory';
import Overtime from '../pages/overtime';
import Sales from '../pages/sales';
import Production from '../pages/production';
import Layout from '../components/layout';
import CreateAdmin from '../pages/admin/CreateAdmin';
import ViewAdmin from '../pages/admin/ViewAdmin';
import CreateSale from '../pages/sales/CreateSale';
import ViewSales from '../pages/sales/ViewSales';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/admin',
        element: <Admin />,
        children: [
          { path: 'create', element: <CreateAdmin /> },
          { path: 'view', element: <ViewAdmin /> },
        ],
      },
      { path: '/attendance', element: <Attendance /> },
      {
        path: '/sales',
        element: <Sales />,
        children: [
          { path: 'create', element: <CreateSale /> },
          { path: 'view', element: <ViewSales /> },
        ],
      },
      { path: '/employee', element: <Employee /> },
      { path: '/inventory', element: <Inventory /> },
      { path: '/overtime', element: <Overtime /> },
      { path: '/production', element: <Production /> },
      { path: '/expense', element: <Expense /> },
    ],
  },
]);

const MainRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default MainRoute;
