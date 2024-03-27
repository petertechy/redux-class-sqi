import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to='/'>Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to='/profile'>Profile</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to='/about-me'>About Me</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to='/our-services'>Our Services</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
