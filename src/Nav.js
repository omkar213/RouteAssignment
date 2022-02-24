import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navigation-bar">
        <h1>LOGO</h1>
        <ul className="nav-links">
          <Link className="linkstyle" to="/">
            <li>Home</li>
          </Link>
          <Link className="linkstyle" to="/about">
            <li>About</li>
          </Link>
          <Link className="linkstyle" to="/shop">
            <li>UsersInfo</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
