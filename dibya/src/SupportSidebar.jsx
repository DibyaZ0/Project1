import React from 'react'

function SupportSidebar() {
  return (
    <div>
      <h3>Booking menu</h3>
      <label className="heading">My Messsages:</label>
      <select className="dropdown">
           <option>✔️Open</option>
           <option>❌Closed</option>
       </select>

       <label className="heading">Issues:</label>
      <select className="dropdown">
           <option>❌Unresolved</option>
           <option>✔️Resolved</option>
       </select>
       
       <label className="heading">Favourites:</label>
      <select className="dropdown">
           <option>👤Amira rahaman</option>
           <option>⭐Lucas mayer</option>
       </select>
    </div>
  )
}

export default SupportSidebar
