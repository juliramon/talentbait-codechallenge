import React from "react";
import { Check, X } from "tabler-icons-react";

const ToastNotification = ({ handleToastVisibility }) => {
  return (
    <div className="toast-notification toast-notification__success">
      <div className="toast-notification__sign">
        <Check size={30} strokeWidth={2} color={"white"} />
      </div>
      <div className="toast-notification__text">
        <span>The ad has been successfully removed</span>
      </div>
      <div
        className="toast-notification__dismiss"
        onClick={() => handleToastVisibility()}
      >
        <X size={14} strokeWidth={2.5} color={"white"} />
      </div>
    </div>
  );
};

export default ToastNotification;
