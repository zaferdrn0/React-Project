import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./css/Register.css";
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userLogin = async (email, password) => {
    setLoading(true);
    setIsDisabled(true);

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
      credentials: "include",
    });

    const data = await response.json({}).then((data) => {
      let messages = data.message;
      setMessage(messages);
      if (data.data === "1") {
        setLoading(false);
        setIsDisabled(false);
      }
      if(data.giris === "1"){
        console.log("girdim")
        navigate('/')
      }
    });

    return data;
  };

  if (loading === true) {
  }

  return (
    <>
      <div>
        <Header giris="Register" url="/register" />
      </div>
      <div className="register">
        <div className="container">
          <div className="screen">
            <div className="logo">
              <img src="/images/logo.png" alt=""></img>
            </div>
            <div className="input">
              <input
                disabled={isDisabled}
                value={email}
                type="text"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                disabled={isDisabled}
                value={password}
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="login-btn">
              <button
                disabled={isDisabled}
                onClick={() => userLogin(email, password)}
              >
                LOGIN NOW
              </button>
            </div>
            {loading && <div>Loading...</div>} <div><br></br>{message}</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </>
  );
};

export default Login;
