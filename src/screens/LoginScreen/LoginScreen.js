import React, { useState, useEffect } from "react";
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
  const [guestLogin, setGuestLogin] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (guestLogin === "admin" || guestLogin === "employee") {
      submitData();
    }
  }, [guestLogin]);

  const submitData = async () => {
    try {
      const response = await axios.post(
        "/api-token-auth/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username:
              guestLogin === "admin"
                ? "admin"
                : guestLogin === "employee"
                ? "kunal"
                : name,
            password:
              guestLogin === "admin" || guestLogin === "employee"
                ? "1234"
                : password,
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
      setGuestLogin("");
      history.replace("/");
    } catch (error) {
      setGuestLogin("");
      console.log(error.message);
      toast.error("Authentication denied");
    }
  };

  const handleSubmit = async () => {
    if (name.trim().length > 0 && password.trim().length > 0) {
      submitData();
    } else {
      setGuestLogin("");
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
                  e.preventDefault();
                  await setGuestLogin("admin");
                }}
              />
              <div
                className="guest-login-employee"
                onClick={async (e) => {
                  e.preventDefault();
                  await setGuestLogin("employee");
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
