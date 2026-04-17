import React, { useEffect, useState } from "react";
import { getStudents } from "../services/api";
import "../styles/style.css";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem("token");
      const data = await getStudents(token);
      setStudents(data);
    };
    load();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <h3>Total Students: {students.length}</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;