import React, { useState } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import AddMedicineForm from "./AddMedicineForm";
import UpdateMedicineForm from "./UpdateMedicineForm";
import "./Medicine.css";
import Header from "../../components/Header/Header";

const Medicine = () => {
  const [activeTab, setActiveTab] = useState("addMedicine");
  return (
    <div className="medicine-wrapper">
      <Header/>
      <Card>
        <Card.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            <Tab eventKey="addMedicine" title="Add Medicine">
              <AddMedicineForm />
            </Tab>
            <Tab eventKey="updateMedicine" title="Update Medicine">
              <UpdateMedicineForm />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Medicine;
