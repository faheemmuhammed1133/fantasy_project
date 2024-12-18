import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx";
const Sidebar = () => {

   const { user , logout } = useAuth();
  return (
    <div className="sidebar">
  <ul className="sidebar-list">
    <Link className="menu-item" to="/">
      <i className="fas fa-home"></i>
      <span className="menu-text">HOME</span>
    </Link>
    <Link className="menu-item" to="/mymatches">
      <i className="fas fa-futbol"></i>
      <span className="menu-text">My Matches</span>
    </Link>
    <Link className="menu-item" to="/rewards">
      <i className="fas fa-gift"></i> 
      <span className="menu-text">Rewards</span>
    </Link>
    <Link className="menu-item" to="/help">
      <i className="fas fa-question-circle"></i>
      <span className="menu-text">How to Play</span>
    </Link>
    <Link className="menu-item" to="/settings">
      <i className="fas fa-cog"></i>
      <span className="menu-text">Settings</span>
    </Link>
    
  </ul>
  <ul className="auth">
    {user ? (
            <li className="menu-item"> 
               <i className="fas fa-sign-out"> {logout}</i>
               <span className="menu-text">Sign-Out </span>
            </li>
        ) :null }
  </ul>
</div>

  );
};

export default Sidebar;
