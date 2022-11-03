import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;

    const res = await fetch("http://localhost:5000/register", {
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
    });
    const data = await res.json();
    if (data.status === false) {
      toast.error(data.msg, toastOptions);
    }
    if (data.status === true) {
      localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      navigate("/dental-clinic/login_user");
    }
    handleValidation();
  };

  // useEffect(() => {
  //   if (localStorage.getItem("chat-app-user")) {
  //     // navigate("/dental-clinic/user/chat_section");
  //   }
  // }, []);

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = user;
    if (password !== confirmPassword) {
      toast.error(
        "password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length <= 2) {
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

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (handleValidation()) {
  //       console.log("In validation", registerRoute);
  //       const { email, username, password } = user;
  //       const { data } = await axios.post(registerRoute, {
  //         username,
  //         email,
  //         password,
  //       });
  //       if (data.status === false) {
  //         toast.error(data.msg, toastOptions);
  //       }
  //       if (data.status === true) {
  //         localStorage.setItem("chat-app-user", JSON.stringify(data.user));
  //         navigate("/dental-clinic/login_user");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              Already have an account ?
              <Link to="/dental-clinic/login_user">Login</Link>
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
