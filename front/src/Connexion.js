import React, { useEffect, useState } from "react";
import axios from "axios";
import Student from "./Student";

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

  return (
      <div>
          {students.map((student) => (
            <Student key={student._id} {...student} />
          ))}
      </div>
  );
}

export default Connexion;
