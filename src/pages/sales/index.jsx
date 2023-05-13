import { Outlet } from 'react-router-dom';
import SalesContextProvider from '../../state/SalesContextProvider';
import './sales.css';

const Sales = () => {
  return (
    <SalesContextProvider>
      <Outlet />
    </SalesContextProvider>
  );
};

export default Sales;
