import React, { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from './TableComponent'

function Connexion() {
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios("http://localhost:5000/api/students/");
        setStudents(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, []);
  if(students.length) {
    console.log("students0", students[0]._id)
  }

  const sendEmail = async (email) => {
    try {
      return await axios.post("http://localhost:5000/api/student/sendEmail", 
      {to :email,
        subject : "Retard",
        text :"Hello, tu es en retard pour le cours !"});
    } catch (e) {
      console.log("error, error")
    }
  };

  return (
      <TableComponent data={students} sendEmail={sendEmail} />
  );
}

export default Connexion;