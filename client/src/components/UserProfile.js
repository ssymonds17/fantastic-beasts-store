import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import { fetchOrders } from '../apis/order';
import '../components/styles/user-profile.css';

export default function UserProfile() {
  const { currentUser } = useGlobalContext();
  const [userOrders, setUserOrders] = useState([]);

  const loadOrders = async (id) => {
    const newOrders = await fetchOrders(id);
    setUserOrders(newOrders);
  };

  useEffect(() => {
    if (currentUser) {
      loadOrders(currentUser.id);
    }
  }, [currentUser]);

  return (
    <div className='container'>
      <header className='user-header'>
        {!currentUser && <h1>Loading...</h1>}
        {currentUser && (
          <h1>
            {currentUser.first_name} {currentUser.last_name}
          </h1>
        )}
      </header>
      {userOrders.length > 0 && (
        <main className='user-orders-container'>
          <h2>Your Previous Orders</h2>
          <table className='orders-table'>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Order Date</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order) => {
                return (
                  <tr key={order.order_number}>
                    <td>{order.order_number}</td>
                    <td>{order.order_date.slice(0, 10)}</td>
                    <td>¥{order.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      )}
      {userOrders.length === 0 && <h2>You have yet to make any orders</h2>}
    </div>
  );
}
