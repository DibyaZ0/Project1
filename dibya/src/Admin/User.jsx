import React, { useEffect, useState } from 'react';
import './User.css';

function User() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('/user.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error loading user data', error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(selectedUser?.id === user.id ? null : user);
  };

  return (
    <div className="user-container">
      <div className="user-sidebar">
        <h2>Users</h2>
        <input type="text" placeholder="Search" className="search-box" />
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user)} className="user-item">
              <div className="user-info">
                <b>{user.name}</b>
                <p>{user.role}</p>
                <p>{user.email}</p>
              </div>
              <div className="user-status">
                <span>{user.status}</span>
                <span className="since">Since {user.since}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedUser && (
        <div className="user-details" onClick={() => setSelectedUser(null)}>
          <h2>{selectedUser.name}</h2>
          <p><b>Role:</b> {selectedUser.role}</p>
          <p><b>Email:</b> {selectedUser.email}</p>
          <p><b>Status:</b> {selectedUser.status}</p>
          <p><b>Since:</b> {selectedUser.since}</p>
        </div>
      )}
    </div>
  );
}

export default User;
