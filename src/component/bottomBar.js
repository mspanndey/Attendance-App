import React from "react";
import { FaHome, FaBell, FaUser, FaChartBar } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
  const barStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    zIndex: 1000,
  };

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    color: "#333",
    textDecoration: "none",
  };

  const iconStyle = {
    fontSize: "20px",
    marginBottom: "5px",
  };

  const AttendanceHandler = (e) => {
    e.preventDefault();
    navigate("/Attendance");
  };

  const insightsHandler = (e) => {
    e.preventDefault();
    navigate("/Insights");
  };

  const homeHandler = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  const notifictionHandler = (e) => {
    e.preventDefault();
    navigate("/Notification");
  };

  const profileHandler = (e) => {
    e.preventDefault();
    navigate("/Profile");
  };

  return (
    <div style={barStyle}>
      <div style={buttonStyle}>
        <MdEventAvailable style={iconStyle} onClick={AttendanceHandler} />
        <span>Attendance</span>
      </div>
      <div style={buttonStyle}>
        <FaChartBar style={iconStyle} onClick={insightsHandler} />
        <span>Insights</span>
      </div>
      <div style={buttonStyle}>
        <FaHome style={iconStyle} onClick={homeHandler} />
        <span>Home</span>
      </div>
      <div style={buttonStyle}>
        <FaBell style={iconStyle} onClick={notifictionHandler} />
        <span>Notification</span>
      </div>
      <div style={buttonStyle}>
        <FaUser style={iconStyle} onClick={profileHandler} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomBar;
