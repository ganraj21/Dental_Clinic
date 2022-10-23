import React from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import "./BookingHours.css";
import CurrentDayData from "./PagesData/CurrentDayData";
function BookingHours() {
  const fetch_current_day_data = () => {
    alert("you click on this");
  };

  return (
    <>
      <div className="booking_section_container">
        <div className="bsc_header">
          {CurrentDayData.map((c_data, index) => {
            return (
              <div
                className="bsc_header_info"
                key={index}
                onClick={fetch_current_day_data}
              >
                <h2>{c_data.day}</h2>
                <p>{c_data.cs_date} slots available</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="bsc_lower">
          <div className="bsc_lower_container">
            <div className="bsc_lower_morning_container">
              <span>Morning</span>
              {MorningData.map((data, index) => {
                return (
                  <span className="md_data" key={index}>
                    {data.m_slot_time}
                  </span>
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
