import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import User from './Admin/User';
import Teams from './Admin/Teams';
import Planet from './Admin/Planet';
import Vessel from './Admin/Vessel';
import Customers from './Bookings/Customers';
import Invoices from './Bookings/Invoices';
import Upcoming from './Bookings/Upcoming';
import Past from './Bookings/past';

function App2() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="admin content">
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/planet" element={<Planet />} />
            <Route path="/vessel" element={<Vessel />} />
          </Routes>
        </div>
        <div className="Bookings content">
          <Routes>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
            <Route path="/past" element={<Past/>}/>
            <Route path="/upcoming" element={<Upcoming/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App2;
