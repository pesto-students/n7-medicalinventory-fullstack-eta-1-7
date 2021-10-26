import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import "./Login.css";
import { log } from "../../features/login/loginSlice";
import { useHistory } from "react-router";
import { setAuthToken } from "../../localStorage";
import { toast } from "../../components/Toast/Toast";
import { currentShop } from "../../features/shop/shopSlice";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim().length > 0 && password.trim().length > 0) {
      try {
        const response = await axios.post(
          "/api-token-auth/",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            auth: {
              username: name,
              password: password,
            },
          }
        );
        dispatch(
          log({
            admin: response.data.isAdmin,
            employee: response.data.employeeId,
            company: response.data.companyId,
          })
        );
        if (!response.data.isAdmin) {
          dispatch(currentShop(response.data.companyId));
        }
        setAuthToken("token", response.data.token);
        setAuthToken("isAdmin", response.data.isAdmin ? "true" : "false");
        history.replace("/");
      } catch (error) {
        console.log(error.message);
        toast.error("Authentication denied");
      }
    } else {
      toast.error("no Data");
    }
  };

  return (
    <div className="main">
      <div className="container__login">
        <div className="logo">Login Form</div>
        <div className="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="login-item">
          <div className="form form-login">
            <div className="form-field">
              <label className="user" for="login-username">
                <span className="hidden">Username</span>
              </label>
              <input
                id="login-username"
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                required
              />
            </div>

            <div className="form-field">
              <label className="lock" for="login-password">
                <span className="hidden">Password</span>
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-field">
              <input
                onClick={(e) => handleSubmit(e)}
                type="submit"
                value="Login"
              />
            </div>
            <div className="form-field guest-submit-wrapper">
              <input
                type="submit"
                value="Login as guest (Admin)"
                onClick={async (e) => {
                  await setName("admin");
                  await setPassword("1234");
                  await handleSubmit(e);
                }}
              />
              <div
                className="guest-login-employee"
                onClick={async (e) => {
                  await setName("kunal");
                  await setPassword("1234");
                  await handleSubmit(e);
                }}
              >
                Login as guest (Employee)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
