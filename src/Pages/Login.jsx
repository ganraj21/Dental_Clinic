import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  //  https://dental-service.onrender.com/login_user
  const url = "https://dental-service.onrender.com/login_user";
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { email, password } = values;
    if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    } else if (email.length === "") {
      toast.error("email and Password is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = values;

    const request_login_options = { email, password };
    // console.log(request_login_options);

    if (handleValidation()) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(request_login_options),
      });

      const data = await res.json();

      // console.log(data);
      toast.error(data.error, toastOptions);
      toast.error(data.msg, toastOptions);

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", data);
        navigate("/dental-clinic/user/chat_section");
      }
    }
  };

  return (
    <>
      <div className="login_form_section">
        <div className="form_container_for_login">
          <form
            className="login_u_form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h1>Om Dental Clinic</h1>
            </div>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="Password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button className="login_form_button" type="submit">
              Login In
            </button>
            <span className="lower_title_login">
              Don't have an account ?<Link to="/register">Register</Link>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
