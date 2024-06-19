import React, { useState, useEffect } from 'react';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    User.findAll().then(users => setUsers(users));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
};

export default UserList;