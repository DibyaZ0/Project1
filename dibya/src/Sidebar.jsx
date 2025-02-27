import React, { useState } from 'react';
import { FaSearch, FaBars, FaUserShield, FaDatabase, FaReact } from "react-icons/fa";
import AdminSidebar from './AdminSidebar';
import SupportSidebar from './SupportSidebar';
import BookingSidebar from './BookingSidebar';

function Sidebar() {
  const [activeSidebar, setActiveSidebar] = useState(false);
const togglesidebar = (sidebar) =>{
  setActiveSidebar(activeSidebar === sidebar?false:sidebar)
}

  return (
    <div className="container">
      <div className="firstsidebar">
        <button className="button"> <FaReact /> </button>
        <button className="button"> <FaSearch /> Search</button>
        <button className="button" onClick={() => togglesidebar("booking")}> <FaUserShield /> Booking</button>
        <button className="button" onClick={() => togglesidebar("support")}> <FaBars /> Support</button>
        <button className="button" onClick={() => togglesidebar("admin")}> <FaDatabase /> Admin</button>
      </div>

        {activeSidebar === "admin" && (
          <div className="admin-sidebar">
            <AdminSidebar />
          </div>
        )}

        {activeSidebar === "support" && (
          <div className="support-sidebar">
            <SupportSidebar />
          </div>
        )}

        {activeSidebar === "booking" && (
          <div className="booking-sidebar">
            <BookingSidebar />
          </div>
        )}
    </div>
  );
}

export default Sidebar;
