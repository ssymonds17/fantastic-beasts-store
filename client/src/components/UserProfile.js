import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import { fetchOrders } from '../apis/order';
import '../components/styles/user-profile.css';

export default function UserProfile() {
  const { currentUser } = useGlobalContext();
  const [userOrders, setUserOrders] = useState(null);

  const loadOrders = async (id) => {
    const newOrders = await fetchOrders(id);
    setUserOrders(newOrders);
  };

  useEffect(() => {
    if (!userOrders) {
      loadOrders(currentUser.id);
    }
  }, []);

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
      {userOrders && (
        <main>
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
    </div>
  );
}
