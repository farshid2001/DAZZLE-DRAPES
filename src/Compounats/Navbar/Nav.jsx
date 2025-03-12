import React, { useContext, useRef, useState } from "react";
import "./nav.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/menu.png"

const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  const { getCartTotalItems } = useContext(ShopContext)

  const menuRef = useRef();

  const dropdwon_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')
  }


  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo-img" src={logo} alt="logo" />
        <p>DAZZLE DRAPES</p>
      </div>

      <img className="nav-dropdown" onClick={dropdwon_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "black" : "gray", 
            })}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "black" : "gray",
            })}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/womens"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "black" : "gray",
            })}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kids"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "black" : "gray",
            })}
          >
            Kids
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img className="cart-img" src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{getCartTotalItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
