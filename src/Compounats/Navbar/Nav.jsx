import React, { useContext } from "react";
import "./nav.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
const {getCartTotalItems} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo-img" src={logo} alt="logo" />
        <p>DAZZLE DRAPES</p>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "black" : "gray", // Active link color
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
