import React, { useState } from "react";
import EveningData from "./PagesData/EveningData";
import MorningData from "./PagesData/MorningData";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "./BookingHours.css";
import { useNavigate } from "react-router-dom";
// import logo_img from "./images/logo.png";
// import { Notifications } from "react-push-notification";
// import addNotification from "react-push-notification";

const BookingHours = () => {
  const url = "http://localhost:5000/dental-clinic/slot";
  // const url = "https://dental-service.onrender.com/dental-clinic/slot";
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState({
    date: "",
    name: "",
    email: "",
    phone: "",
    time: "",
  });

  const [aces, setACES] = useState(-1);
  const [ace, setACE] = useState(-1);

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setActiveUser({ ...activeUser, [name]: value });
  };

  const handleValidation = () => {
    const { date, name, email, phone, time } = activeUser;
    if (date === "") {
      toast.error("Choose the Date", toastOptions);
      return false;
    } else if (name === "") {
      toast.error("Enter your name", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Enter your Email", toastOptions);
      return false;
    } else if (phone === "") {
      toast.error("Enter your phone no", toastOptions);
      return false;
    } else if (time === "") {
      toast.error("Choose your slot timing", toastOptions);
      return false;
    } else if (
      date === "" ||
      name === "" ||
      email === "" ||
      phone === "" ||
      time === ""
    ) {
      toast.error("Plz Enter Your all details", toastOptions);
      return false;
    }
    return true;
  };

  // const clickToNotify = () => {
  //   addNotification({
  //     title: "Om Dental Clinic",
  //     message: "Appointment booking notification ",
  //     duration: 8000,
  //     icon: logo_img,
  //     native: true,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { date, name, email, phone, time } = activeUser;

    const requestOptions = {
      date,
      name,
      email,
      phone,
      time,
    };
    console.log(requestOptions);

    if (handleValidation()) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestOptions),
      });

      const data = await res.json();

      if (data.message === "successfully Make An Appointment") {
        console.log("Your data submitted to me it's server");
        toast.success(data.message, toastOptions);
        // clickToNotify(); // Notification message
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else if (data.message === "This slot is already Booked") {
        toast.error(data.message, toastOptions);
      }
    }
  };

  return (
    <>
      <div className="booking_section_container">
        <div className="bsc_lower">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="bsc_lower_container">
              <div className="bsc_header">
                <div className="appointment_hours_form">
                  <div className="form_for_booking">
                    <div className="brand">
                      <img src={Logo} alt="logo" />
                      <h1>Om Dental Clinic</h1>
                    </div>
                    <input
                      type="date"
                      placeholder="Select Date"
                      name="date"
                      style={{ color: "White" }}
                      value={activeUser.date}
                      onChange={handleInputs}
                    />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      min="3"
                      value={activeUser.name}
                      onChange={handleInputs}
                    />
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      name="email"
                      min="3"
                      value={activeUser.email}
                      onChange={handleInputs}
                    />
                    <input
                      type="phone"
                      placeholder="Phone No"
                      name="phone"
                      value={activeUser.phone}
                      onChange={handleInputs}
                    />

                    <a
                      className="submit_btn"
                      href="#container45"
                      style={{
                        scrollBehavior: "smooth",
                        textDecoration: "none",
                        transition: "2s all ease",
                      }}
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
              <div className="me_slot_selection">
                <div className="bsc_lower_morning_container">
                  <span>Morning and Evening Slots</span>
                  <div className="morning_info_container" id="container45">
                    {MorningData.map((data, index) => {
                      return (
                        <div
                          className="md_data"
                          style={{
                            backgroundColor:
                              aces === index ? data.color[0] : "white",
                            color: aces === index ? data.color[1] : "black",
                          }}
                          onClick={() => {
                            setACES(index);
                            setActiveUser({
                              ...activeUser,
                              time: data.m_slot_time,
                            });
                          }}
                          key={index}
                        >
                          {data.m_slot_time}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />
                <div className="bsc_lower_evening_container">
                  <div className="evening_info_container">
                    {EveningData.map((data, index) => {
                      return (
                        <div
                          className="ed_data"
                          key={index}
                          style={{
                            backgroundColor:
                              ace === index ? data.color[0] : "white",
                            color: ace === index ? data.color[1] : "black",
                          }}
                          onClick={() => {
                            setACE(index);
                            setActiveUser({
                              ...activeUser,
                              time: data.e_slot_time,
                            });
                          }}
                        >
                          {data.e_slot_time}
                        </div>
                      );
                    })}
                    <div className="submit_slot_btn">
                      <button className="booking_c_btn" id="bcb" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default BookingHours;
