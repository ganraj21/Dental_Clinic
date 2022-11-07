import React, { useState } from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import Logo from "../assets/logo.png";
import "./BookingHours.css";

const BookingHours = () => {
  const [moreven, setMoreven] = useState(0);
  const [activeUser, setActiveUser] = useState({
    date: "",
    firstname: "",
    lastname: "",
    phone: "",
    time: { moreven },
  });
  const [ace, setACE] = useState(-1);

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setActiveUser({ ...activeUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const in_data = (data) => {
    var inner_data = moreven === 0 ? data.m_slot_time : data.e_slot_time;
    console.log(inner_data);
  };
  const conpileData = () => {
    console.log(activeUser);
  };
  return (
    <>
      <div className="booking_section_container">
        <div className="bsc_lower">
          <div className="bsc_lower_container">
            <div className="bsc_header">
              <div className="appointment_hours_form">
                <form
                  className="form_for_booking"
                  onSubmit={(event) => handleSubmit(event)}
                >
                  <div className="brand">
                    <img src={Logo} alt="logo" />
                    <h1>Om Dental Clinic</h1>
                  </div>
                  <input
                    type="date"
                    placeholder="Select Date"
                    name="date"
                    value={activeUser.date}
                    onChange={handleInputs}
                  />
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="firstname"
                    min="3"
                    value={activeUser.firstname}
                    onChange={handleInputs}
                  />
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastname"
                    min="3"
                    value={activeUser.lastname}
                    onChange={handleInputs}
                  />
                  <input
                    type="phone"
                    placeholder="Phone No"
                    name="phone"
                    value={activeUser.phone}
                    onChange={handleInputs}
                  />

                  <button className="submit_btn" type="submit">
                    Continue
                  </button>
                </form>
              </div>
            </div>
            <div className="me_slot_selection">
              <div className="bsc_lower_morning_container">
                <span>Morning and Evening Slots</span>
                <div className="morning_info_container">
                  {MorningData.map((data, index) => {
                    return (
                      <button
                        name="time"
                        value={activeUser.time}
                        onChange={handleInputs}
                        className="md_data"
                        style={{
                          backgroundColor:
                            activeUser === index ? data.color[0] : "white",
                          color: activeUser === index ? data.color[1] : "black",
                        }}
                        onClick={() => {
                          setActiveUser(index);
                          setMoreven(data.m_slot_time);
                          in_data(data);
                        }}
                        key={index}
                      >
                        {data.m_slot_time}
                      </button>
                    );
                  })}
                </div>
              </div>
              <hr />
              <div className="bsc_lower_evening_container">
                <div className="evening_info_container">
                  {EveningData.map((data, index) => {
                    return (
                      <button
                        name="time"
                        value={activeUser.time}
                        onChange={handleInputs}
                        className="ed_data"
                        key={index}
                        style={{
                          backgroundColor:
                            ace === index ? data.color[0] : "white",
                          color: ace === index ? data.color[1] : "black",
                        }}
                        onClick={() => {
                          setACE(index);
                          setMoreven(data.e_slot_time);
                          in_data(data);
                        }}
                      >
                        {data.e_slot_time}
                      </button>
                    );
                  })}
                  <div className="submit_slot_btn">
                    <button
                      className="booking_c_btn"
                      id="bcb"
                      onClick={conpileData}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHours;
