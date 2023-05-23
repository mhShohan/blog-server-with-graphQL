import React, { useContext } from 'react';
import Loader from '../../components/Loader';
import { SalesContext } from '../../state/SalesContextProvider';

const ViewSales = () => {
  const {
    state: { isLoading, sales },
  } = useContext(SalesContext);

  console.log(sales);

  if (isLoading) return <Loader />;

  return (
    <div className='ms-3'>
      <Loader />
    </div>
  );
};
export default ViewSales;
