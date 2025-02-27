import React from 'react'
import { Outlet } from 'react-router-dom';

function Teams() {
  return (
    <div>
      <h1>teams</h1>
      <Outlet/>
    </div>
  );
}

export default Teams;
