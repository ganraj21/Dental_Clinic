import React, { useState } from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import "./BookingHours.css";
import BookingSlotOtp from "./BookingSlotOtp";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
function BookingHours() {
  const [colorIn, setColorIn] = useState();
  const [activeState, setActiveState] = useState(false);
  const [current_day, setCurrentDay] = useState("Today");

  const color_set_true = { backgroundColor: "green", color: "white" };
  // Render the Calendar
  var today = new Date();
  var lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );

  return (
    <>
      <div className="booking_section_container">
        <div className="bsc_lower">
          <div className="bsc_lower_container">
            <div className="bsc_header">
              <InfiniteCalendar
                width={450}
                height={400}
                selected={today}
                disabledDays={[0, 6]}
                minDate={lastWeek}
              />
            </div>
            <div className="bsc_lower_morning_container">
              <span>Morning</span>
              <div className="morning_info_container">
                {MorningData.map((data, index) => {
                  return (
                    <button
                      id={index}
                      className="md_data"
                      onClick={() => {
                        // color_seting_fun(index);
                      }}
                      key={index}
                    >
                      {data.m_slot_time}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="bsc_lower_evening_container">
              <span>Evening</span>
              <div className="evening_info_container">
                {EveningData.map((data, index) => {
                  return (
                    <button className="ed_data" key={index}>
                      {data.e_slot_time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            className="booking_c_btn"
            id="bcb"
            // disabled
            onClick={() => {
              <BookingSlotOtp />;
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingHours;
