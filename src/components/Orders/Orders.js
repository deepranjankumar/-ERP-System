import React from 'react';
import OrderList from './OrderList';
// import OrderDetails from './OrderDetails'; // Optional

const Orders = () => {
  return (
    <div>
      <h1>Orders Management</h1>
      <OrderList />
      {/* Optional: <OrderDetails /> */}
    </div>
  );
};

export default Orders;
