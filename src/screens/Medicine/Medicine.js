import React, { useState } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import MedicineForm from "./MedicineForm";
import "./Medicine.css";

const Medicine = () => {
  const [activeTab, setActiveTab] = useState("addMedicine");
  return (
    <div className="medicine-wrapper">
      <Card>
        <Card.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            <Tab eventKey="addMedicine" title="Add Medicine">
              <MedicineForm editMode={false} />
            </Tab>
            <Tab eventKey="updateMedicine" title="Update Medicine">
              <MedicineForm editMode={true} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Medicine;
