import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlane, faViruses, faTable } from "@fortawesome/free-solid-svg-icons";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>
      <nav>
      <ul>
        <li><Link to="/user"> <FontAwesomeIcon icon={faUsers} /> Users</Link></li>
        <li><Link to="/teams"> <FontAwesomeIcon icon={faTable} /> Teams</Link></li>
        <li><Link to="/planet"> <FontAwesomeIcon icon={faPlane} /> Planets</Link></li>
        <li><Link to="/vessel"> <FontAwesomeIcon icon={faViruses} /> Vessels</Link></li>
      </ul>
      </nav>
      <label className="heading">Favourites:</label>
      <select className="dropdown">
           <option>👤 Alice Smith</option>
           <option>🌍 Earth</option>
       </select>

    </div>
  );
}

export default AdminSidebar;
