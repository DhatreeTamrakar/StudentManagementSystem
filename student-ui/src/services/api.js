const BASE_URL = "http://localhost:5000/api/Student";

export const getStudents = async (token) => {
  const res = await fetch(BASE_URL, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return res.json();
};

export const addStudent = async (data, token) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
};