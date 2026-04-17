import React, { useState } from "react";
import "../styles/style.css";

function Login() {
  const [role, setRole] = useState("student");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/Auth/login?username=admin&password=1234", {
      method: "POST"
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);

    if (role === "admin") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;