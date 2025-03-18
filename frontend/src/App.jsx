import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Football from "./pages/Football.jsx";
import Cricket from "./pages/Cricket.jsx";
import NBA from "./pages/NBA.jsx";
import "./App.css";
import Login from "./pages/auth/Login.jsx";
import { AuthProvider } from './contexts/AuthContext.jsx';
import Register from "./pages/auth/Register.jsx";
import Wallet from "./components/Wallet.jsx";
import MatchDetail from "./components/MatchDetail.jsx";
import FantasyFootball from "./pages/FantasyFootball.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="app-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Football />} />
              <Route path="/football" element={<Football />} />
              <Route path="/cricket" element={<Cricket />} />
              <Route path="/nba" element={<NBA />} />
              <Route path="/football/:id" element={<MatchDetail />} />
              <Route path="/howtoplay" element={<FantasyFootball />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
