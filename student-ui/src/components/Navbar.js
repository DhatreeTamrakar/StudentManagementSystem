import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>EduApp</h2>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/student">Student</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}

export default Navbar;