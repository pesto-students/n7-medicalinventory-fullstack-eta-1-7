import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ autoClose = 5000 }) => {
  return (
    <ToastContainer
      hideProgressBar
      autoClose={autoClose}
      style={{ zIndex: 12000 }}
      position={toast.POSITION.BOTTOM_RIGHT}
    />
  );
};

export { Toast, toast };
