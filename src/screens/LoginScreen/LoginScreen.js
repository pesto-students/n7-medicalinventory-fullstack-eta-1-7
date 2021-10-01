import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import "./Login.css";
import { log } from "../../features/login/loginSlice";
import { useHistory } from "react-router";
import { setAuthToken } from "../../localStorage";

function LoginScreen() {
<<<<<<< HEAD
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async () => {
        if (name.trim().length > 0 && password.trim().length > 0){
            try {
                console.log({username:name,password:password})
                const response = await axios.post('/api-token-auth/',{},{
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    auth: {
                        username: name,
                        password: password
                      }
                  })
                dispatch(log(response.data.isAdmin))
                ls.set('token', response.data.token)
                history.replace('/')
            } 
              catch (error) {
                  console.log(error)
                  alert("Authentication denied")

              }
        }
        else{
            alert("no Data")
        }
        
        
=======
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async () => {
    if (name.trim().length > 0 && password.trim().length > 0) {
      try {
        console.log(name, password);
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
        dispatch(log(response.data.isAdmin))
        setAuthToken("token", response.data.token);
        setAuthToken("isAdmin", response.data.isAdmin ? "true" : "false");
        history.replace("/");
      } catch (error) {
        console.log(error.message);
        alert("Authentication denied");
      }
    } else {
      alert("no Data");
>>>>>>> 9bfdf4148401f62410718ebcb5f619bd8996d97f
    }
  };
  return (
    <div className="main">
      <div className="login-container">
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
              <input onClick={handleSubmit} type="submit" value="Log in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
