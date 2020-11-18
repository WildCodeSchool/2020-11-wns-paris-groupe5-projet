import React from "react";

function Student({ firstName, lastName }) {

  return (
    <div>
      <h3>{firstName} {lastName}</h3>
    </div>
  );
}

export default Student;