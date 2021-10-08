import React from "react";
import { PaintBucket } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./EmptyState.css";

const EmptyState = ({ actions }) => {
  const history = useHistory();

  return (
    <div className="empty-state-wrapper">
      <p>
        <PaintBucket size={100} />
      </p>
      <p>
        <h4>No data found!</h4>
      </p>
      <p>{actions}</p>
    </div>
  );
};

export default EmptyState;
