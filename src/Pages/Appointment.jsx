import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Appointment.css";
const Appointment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dental-clinic/slot");
    }, 4000);
  }, []);
  return (
    <>
      <div className="app_container">
        <div className="upper_container">
          <div className="appointment_booking_section">
            <div className="appointment_booking_container">
              <div className="booking_header">
                <i className="fa-regular fa-clock"></i>
                <span>Only few Slots Available for Today</span>
              </div>
              <p className="about_info">
                Please book for the next slot available by clicking on book Your
                slot
              </p>
            </div>
            <hr />
            <div className="booking_container">
              <div className="booking_bottom">
                <h3>Book Clinic Visit</h3>
                <h4>No Booking Fee</h4>
              </div>
              <div className="booking_slot_section">
                <Link to="/dental-clinic/slot">
                  <div className="book_slot"> Book Your Slot </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
