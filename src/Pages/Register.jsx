import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      // navigate("/dental-clinic/login_user");
    }
  });

  const handleInputs = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, name, email } = user;
    if (password !== confirmPassword) {
      toast.error(
        "password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (name.length <= 2) {
      toast.error("Enter your full name", toastOptions);
      return false;
    } else if (password.length < 6) {
      toast.error("Password should be greater than 6 character", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = user;
    if (handleValidation()) {
      const res = await fetch(
        "https://omdentalclinic.vercel.app/register.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // if key and values are same then dont write it again eg -> name: name
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await res.json();

      console.log(data);

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.message === "user registered successfully") {
        toast.error(data.msg, toastOptions);
        localStorage.setItem("chat-app-user", user);
        navigate("/login_user");
      }
    }
  };

  return (
    <>
      <div className="register_form_section">
        <FormContainer className="form_container_register">
          <form className="register_u_form" method="POST" onSubmit={PostData}>
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h1>Om Dental Clinic</h1>
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleInputs}
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              autoComplete="off"
            />
            <input
              type="Password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              autoComplete="off"
            />
            <input
              type="Password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputs}
              autoComplete="off"
            />
            <button className="submit_register_btn" type="submit">
              Create User
            </button>
            <span className="lower_title_register">
              Already have an account ?<Link to="/login_user">Login</Link>
            </span>
          </form>
        </FormContainer>
        <ToastContainer />
      </div>
    </>
  );
};

const FormContainer = styled.div``;

export default Register;
