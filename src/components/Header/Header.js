import React from "react";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.svg";
import "./Header.css";

const Header = () => {
  console.log("Header");
  return (
    <div
      className="navbar"
      //   style={{ height: "100px", width: "200px", backgroundColor: "red" }}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h4>Intugine</h4>
      </div>
      <div className="nav-items">
        <li className="nav-item active">Home</li>
        <li className="nav-item">Brands</li>
        <li className="nav-item">Transporter</li>
        <li className="nav-item">
          <img src={profile}  />
        </li>
      </div>
    </div>
  );
};

export default Header;
