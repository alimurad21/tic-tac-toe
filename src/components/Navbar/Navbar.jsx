import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import ProfileImg from "../../asset/img/profile.jpg";
import LoginImg from "../../asset/img/login.png";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleHamburger = () => {
    setIsShow(!isShow);
  };

  return (
    <nav className="nav">
      <div
        className="hamburgerIcon"
        id="hamburgerIcon"
        onClick={handleHamburger}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-container">
        <Link className="logo" to="/">
          <h1>Portfolio</h1>
        </Link>
        <NavLinks/>
        {isShow && <Sidebar/>}
        <div className="profile" onClick={handleLogin}>
          {!isLogin && (
            <Link className="login" to="/">
              <div>
                <img src={LoginImg} alt="" />
                <p>Login</p>
              </div>
            </Link>
          )}
          {isLogin && <img src={ProfileImg} alt="" />}
        </div>
      </div>
    </nav>
  );
}
