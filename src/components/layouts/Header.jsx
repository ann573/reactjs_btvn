import React from "react";
import {NavLink} from 'react-router-dom'
const Header = () => {
  const accessToken = localStorage.getItem("accessToken")
  
  return (
    <>
      <nav className="w-full bg-green-500">
        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li>
            {accessToken ? <NavLink to="/login">Logout</NavLink> : <NavLink to="/register">Register</NavLink>}
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Header;
