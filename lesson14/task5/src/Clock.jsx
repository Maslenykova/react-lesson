import React, { useState, useEffect } from "react";

const Clock = ({ location, offset }) => {
  const getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    const localTime = new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
    return localTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const [time, setTime] = useState(getTimeWithOffset(offset));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;



