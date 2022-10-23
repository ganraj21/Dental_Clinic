import React, { useState } from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import "./BookingHours.css";
import CurrentDayData from "./PagesData/CurrentDayData";
function BookingHours() {
  const [colorIn, setColorIn] = useState();
  const [current_day, setCurrentDay] = useState("Today");
  const fetch_current_day_data = () => {
    alert("you click on this");
    setCurrentDay("Today");
  };

  const color_seting_fun = () => {
    setColorIn("green");
    document.getElementById("bcb").style = "enable";
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
                <h2>{current_day}</h2>
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
              <div className="morning_info_container">
                {MorningData.map((data, index) => {
                  return (
                    <span
                      style={{ backgroundColor: colorIn }}
                      className="md_data"
                      onClick={color_seting_fun}
                      key={index}
                    >
                      {data.m_slot_time}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="bsc_lower_evening_container">
              <span>Evening</span>
              <div className="evening_info_container">
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
          <button
            className="booking_c_btn"
            id="bcb"
            disabled
            onClick={alert("you clicked")}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingHours;
