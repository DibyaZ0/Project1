import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css'

// Dummy Users Data
const users = [
  { id: 1, name: 'Emma Executive', role: 'Software Engineer', email: 'emma.executive@starpass.net', status: 'Active', since: '2022-08-15' },
  { id: 2, name: 'Alice Smith', role: 'Data Scientist', email: 'alice.smith@apex.net', status: 'Active', since: '2023-05-20' },
  { id: 3, name: 'Bob Johnson', role: 'Product Manager', email: 'bob.johnson@starpass.net', status: 'Active', since: '2024-01-10' },
  { id: 4, name: 'Emily Davis', role: 'UX Designer', email: 'emily.davis@gmail.com', status: 'Active', since: '2022-11-28' },
  { id: 5, name: 'Michael Brown', role: 'Marketing Specialist', email: 'michael.brown@apex.net', status: 'Active', since: '2023-09-05' },
];

function User() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="user-container">
      {/* Sidebar with User List */}
      <div className="user-sidebar">
        <h3>Users</h3>
        <input type="text" placeholder="Search" className="search-box" />
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={selectedUser?.id === user.id ? 'active' : ''}
            >
              <span className="user-initial">{user.name.charAt(0)}</span>
              <div className="user-info">
                <strong>{user.name}</strong>
                <p>{user.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* User Details Panel */}
      <div className="user-details">
        {selectedUser ? (
          <div className="details-card">
            <h2>{selectedUser.name}</h2>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Since:</strong> {selectedUser.since}</p>
          </div>
        ) : (
          <h3>Select a user to view details</h3>
        )}
      </div>
    </div>
  );
}

export default User;
