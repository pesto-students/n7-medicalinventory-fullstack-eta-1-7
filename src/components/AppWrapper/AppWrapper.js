import React from "react";
import { Toast } from "../Toast/Toast";

export const AppWrapper = ({ children }) => {
  return (
    <>
      {children}
      <Toast />
    </>
  );
};
