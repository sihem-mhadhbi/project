import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
  const alerts = useSelector((state) => state.alertReducer);
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>
        {alert.msg}
      </div>
    ))
  );
};
