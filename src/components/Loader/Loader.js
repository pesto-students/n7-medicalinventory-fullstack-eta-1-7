import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = ({ inline }) => {
  return (
    <div className={`${inline ? "inline-loader-wrapper" : "loader-wrapper"}`}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
