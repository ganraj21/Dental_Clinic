import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/dental-clinic/user/chat_section");
    }
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { name, password } = values;
    if (password === "") {
      toast.error("username and Password is required", toastOptions);
      return false;
    } else if (name.length === "") {
      toast.error("username and Password is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { name, password } = values;
      const { data } = await fetch(
        "http://localhost:5000/login_user",
        {
          name,
          password,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/dental-clinic/user/chat_section");
      }
    }
  };

  return (
    <>
      <div className="login_form_section">
        <div className="form_container_for_login">
          <form
            action=""
            className="login_u_form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h1>Om Dental Clinic</h1>
            </div>
            <input
              type="text"
              placeholder="Username"
              name="name"
              onChange={(e) => handleChange(e)}
              min="3"
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
