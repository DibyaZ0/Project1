import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFileInvoice, faHistory, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";


function BookingSidebar() {
  return (
    <div>
      <div className="Booking sidebar">
        <h3>Booking menu</h3>
        <nav>
            <ul>
                <li><Link to="/customers"> <FontAwesomeIcon icon={faUsers} /> Customers</Link></li>
                <li><Link to="/invoices"> <FontAwesomeIcon icon={faFileInvoice} />Invoices </Link></li>
                <li><Link to="/past"> <FontAwesomeIcon icon={faHistory} /> Past</Link></li>
                <li><Link to="/upcoming"> <FontAwesomeIcon icon={faCalendarAlt} /> Upcoming</Link></li>
            </ul>
        </nav>

      </div>
    </div>
  )
}

export default BookingSidebar
