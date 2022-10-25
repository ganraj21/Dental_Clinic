import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import styles from "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  // useEffect(() => {
  //   if (localStorage.getItem("chat-app-user")) {
  //     // navigate("/dental-clinic/user/chat_section");
  //   }
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("In validation", loginRoute);
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/dental-clinic/user/chat_section");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("username and Password is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("username and Password is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className={styles.example}>
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
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
                min="3"
              />
              <input
                type="Password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">Login In</button>
              <span className="lower_title_login">
                Don't have an account ?
                <Link to="/dental-clinic/user_registration">Register</Link>
              </span>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Login;
