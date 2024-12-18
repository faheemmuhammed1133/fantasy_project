import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const { user } = useAuth();
  return (
    <div className="header">
      <Link to="/">DREAM11</Link>
      <nav>
        <Link to="/football">
          {" "}
          <i className="fas fa-futbol" /> Football
        </Link>
        <Link to="/cricket">
          <i className="fas fa-baseball-ball" /> Cricket
        </Link>
        <Link to="/nba">
          <i className="fas fa-basketball-ball" /> NBA
        </Link>
      </nav>
      <div className="header-icons">
        {user ? (
          <>
            <span>
            <Link to="/wallet"><i className="fas fa-wallet"></i></Link>
            </span>
            <span>
            <Link to="/wallet"><i className="fas fa-bell"></i></Link>
            </span>
            <span>
            <Link to="/wallet"> <i className="fas fa-user"></i></Link>
            </span>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
