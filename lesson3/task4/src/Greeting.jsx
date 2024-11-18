import React from "react";
import "./index.scss";

const calculateAge = (birthDate) => {
  const birth = new Date(birthDate);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const isBeforeBirthdayThisYear =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  return isBeforeBirthdayThisYear ? age - 1 : age;
};

const Greeting = ({ firstName, lastName, birthDate }) => {
  const age = calculateAge(birthDate);

  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I am ${age} years old.`}
    </div>
  );
};

export default Greeting;