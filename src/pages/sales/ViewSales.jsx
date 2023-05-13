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
    <div className="ms-3">
      {/* <div className="grid">
        {sales.map((sale) => (
          <SingleSale key={sale._id} sale={sale} />
        ))}
      </div> */}
    </div>
  );
};
export default ViewSales;

const SingleSale = ({ sale }) => {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(sale.date);
  const dateStr = `${date.getDate()} ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;

  return (
    <div className="singleSale">
      <h1>Client Name: {sale.clientName}</h1>
      <h2>Type: {sale.type}</h2>
      <h2>Date: {dateStr}</h2>
      <h2>Amount: {sale.amount}</h2>
      <h2>Direct Order: {sale.directOrder}</h2>
      <h2>Received Person: {sale.receivedPerson}</h2>
    </div>
  );
};
