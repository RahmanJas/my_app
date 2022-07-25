import React from "react";
import logo from "./pwclogo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>PWC Student Website</h1>
      </div>

      <div>
        <Link to="/home"> Home </Link> |<Link to="./contact">ContactUs</Link> |
        <Link to="./gallery"> Gallery </Link> |
        <Link to="./application"> Application </Link> |
        <Link to="./about"> AboutUs </Link> |
      </div>
      <button id="mode" onClick={() => document.body.classList.toggle("light")}>
        {" "}
        light mode{" "}
      </button>
    </header>
  );
}

export default Header;
