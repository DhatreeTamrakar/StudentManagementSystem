import React, { useState } from "react";
import { addStudent } from "../services/api";
import "../styles/style.css";

function StudentForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    await addStudent(data, token);
    alert("Saved");
  };

  return (
    <div className="form-container">
      <h2>Student Form</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="course" placeholder="Course" onChange={handleChange} />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default StudentForm;