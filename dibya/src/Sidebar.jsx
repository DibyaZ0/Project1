import React, { useState } from 'react';
import { FaSearch, FaBars, FaUserShield, FaDatabase, FaReact } from "react-icons/fa";
import AdminSidebar from './AdminSidebar';
import SupportSidebar from './SupportSidebar';
import BookingSidebar from './BookingSidebar';

function Sidebar() {
  const [activeSidebar, setActiveSidebar] = useState("admin");
const togglesidebar = (sidebar) =>{
  setActiveSidebar(activeSidebar === sidebar?false:sidebar)
}

  return (
  <div className="app-container">
  <div className="firstsidebar">
  <button className="button"> <FaReact /> </button>
  <button className="button"> <FaSearch /> Search</button>
    <button className={`button ${activeSidebar === "booking" ? "active" : ""}`} onClick={() => togglesidebar("booking")}> <FaUserShield /> Booking</button>
    <button className={`button ${activeSidebar === "support" ? "active" : ""}`} onClick={() => togglesidebar("support")}> <FaBars /> Support</button>
    <button className={`button ${activeSidebar === "admin" ? "active" : ""}`} onClick={() => togglesidebar("admin")}> <FaDatabase /> Admin</button>
  </div>

  <div className="sidebar-container">
    {activeSidebar === "admin" && <div className="admin-sidebar"><AdminSidebar /></div>}
    {activeSidebar === "support" && <div className="support-sidebar"><SupportSidebar /></div>}
    {activeSidebar === "booking" && <div className="booking-sidebar"><BookingSidebar /></div>}
  </div>

  
</div>

  );
}

export default Sidebar;
