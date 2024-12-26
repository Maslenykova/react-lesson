import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState({ online: true });

  useEffect(() => {
    const handleOffline = () => {
      setStatus({ online: false });
    };
    const handleOnline = () => {
      setStatus({ online: true });
    };
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  const statusClass = status.online ? "status" : "status status_offline";
  const statusText = status.online ? "online" : "offline";
  return <div className={statusClass}>{statusText}</div>;
};

export default ConnectionStatus;
