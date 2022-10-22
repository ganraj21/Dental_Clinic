import React from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import "./BookingHours.css";
function BookingHours() {
  return (
    <>
      <div className="booking_section_container">
        <div className="bsc_header"></div>
        <hr />
        <div className="bsc_lower">
          <div className="bsc_lower_container">
            <div className="bsc_lower_morning_container">
              <span>Morning</span>
              {MorningData.map((data, index) => {
                return (
                  <div className="md_data" key={index}>
                    {data.m_slot_time}
                  </div>
                );
              })}
            </div>
            <div className="bsc_lower_evening_container">
              <span>Evening</span>
              {EveningData.map((data, index) => {
                return (
                  <div className="ed_data" key={index}>
                    {data.e_slot_time}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingHours;
