import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./Login.css";
const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const database = [
    {
      username: "ganraj_21",
      password: "1234",
    },
    {
      username: "dr_komal",
      password: "12345",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderForm = <div className="form"></div>;

  return (
    <>
      <div className="login_section_container">
        <div className="login_container">
          <div className="login_info">
            <h2>This is the login form</h2>
          </div>
          <div className="login_user_form">
            <h2>Log in.</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="login_user_name">
                <label>Username</label>
                <input
                  type="text"
                  name="uname"
                  placeholder="admin@gmail.com"
                  required
                />
                {renderErrorMessage}
              </div>
              <div className="login_user_password">
                <label>Password</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Enter correct password"
                  required
                />
              </div>
              <div className="login_user_submit">
                <button type="submit">Submit</button>
                {isSubmitted ? (
                  <div>
                    User is successfully logged in
                    <Dashboard />
                  </div>
                ) : (
                  renderForm
                )}
              </div>
              <div className="sign_up_msg">
                <h3>
                  Don't have an account? <span>Sign up</span>
                </h3>
                <h4>
                  <span id="reset_pass">Forgot password?</span>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
