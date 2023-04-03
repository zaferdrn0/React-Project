import React from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";

const Header = (props) => {
  const title = props.title;
  const register = props.giris;
  const navigate = useNavigate();
  const cikisYap = async () => {
    const response = await fetch("http://localhost:3001/cikisYapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json({}).then((data) => {
      if (data.data === "1") {
        console.log(data);
        navigate("/login");
      }
    });
  };

  return (
    <header className="header">
      <div className="user-menu">
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img src="/images/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="buttons">
              <a href="#"></a>
              <a href="#">How It Works</a>
              <a href="#">Enterprise</a>
              <a href="login">Log In</a>
              <a className="sign-up" href={props.url}>
                {title}
                {register}
              </a>
              <a className="cikis-btn" onClick={cikisYap}>
                {props.cikis}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
