import React, { useEffect, useState } from "react";

const axios = require("axios");

const fetchData = async () => {
    try {
      const result = await axios("http://localhost:5000/?");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

function Connexion() {
    const [data, setData] = useState({ students: [] });
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div>Component Connexion works</div>
  );
}

export default Connexion;