import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import { useAuthContexts } from "../hooks/context";
import axiosAPI from "../utils/axiosApi";

function Connexion() {
  const [students, setStudents] = useState([]);
  const { user } = useAuthContexts();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axiosAPI("/students/");
        const formatedData = result.data.map((elt) => {
          return {
            key: elt._id,
            firstName: elt.firstName,
            lastName: elt.lastName,
            sendEmail: sendEmail,
            sendSms: sendSms,
            email: elt.email,
            phoneNumber: elt.phoneNumber,
          };
        });
        console.log("formatedData", formatedData);
        setStudents(formatedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, []);
  if (students.length) {
    console.log("students0", students[0]._id);
  }

  const sendEmail = async (email) => {
    try {
      return await axiosAPI.post("/student/sendEmail", {
        to: email,
        subject: "Retard",
        text: "Hello, tu es en retard pour le cours !",
      });
    } catch (e) {
      console.log("error, error");
    }
  };
  const sendSms = async (id) => {
    try {
      return await axiosAPI.post("/student/sendSms", { id });
    } catch (e) {
      console.log("error, error");
    }
  };
  if (!user) {
    return window.location.replace("/login");
  }


  return <TableComponent data={students} />;
}

export default Connexion;
