import React, { useState, useEffect } from "react";
import {
  Accordion,
  Form,
  Dropdown,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import { FunnelFill } from "react-bootstrap-icons";
import "./SearchPage.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import EmptyState from "../../components/EmptyState/EmptyState";
import { getSearchedData } from "../../features/search/searchSlice";

const SORT_BY_MENUS = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "lowToHigh" },
  { label: "Price: High to Low", value: "highToLow" },
];

const BRANDS_FILTER = [
  { label: "StayHappi", value: "StayHappi" },
  { label: "Dolo", value: "Dolo" },
  { label: "Crocin", value: "Crocin" },
  { label: "Alkem", value: "Alkem" },
  { label: "Metacin", value: "Metacin" },
];

const SearchPage = ({ location }) => {
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const searchedQuery = params.get("searchQuery");
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");
  const [filters, setFilters] = useState({
    medicine_brands: [],
    product_form: [],
    presecription_required: [],
    age: [],
  });

  const filteredListingData = useSelector((state) => state.search);

  if (filteredListingData.status === "loading") {
    return <Loader />;
  }

  if (filteredListingData.status === "failed") {
    return <>Error</>;
  }

  if (filteredListingData.status === "success") {
    return (
      <>
        {filteredListingData &&
        filteredListingData.searchedData &&
        filteredListingData.searchedData.length ? (
          <div className="search-page-wrapper">
            <div className="search-page--left-panel">
              <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="apply-filter--count">0</span>
                    Active Filters
                  </Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Brands</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    {BRANDS_FILTER.map((item) => (
                      <Form.Check
                        type="checkbox"
                        name={item.value}
                        onChange={(e) => {
                          console.log(e.target.checked, "Value");
                          if (e.target.checked) {
                            let brandNames = filters.medicine_brands;
                            brandNames.push(e.target.name);
                            setFilters({
                              ...filters,
                              medicine_brands: brandNames,
                            });
                          } else {
                            if (
                              filters.medicine_brands.indexOf(e.target.name) !==
                              -1
                            ) {
                              let brandNames = filters.medicine_brands;
                              brandNames.splice(
                                filters.medicine_brands.indexOf(e.target.name),
                                1
                              );

                              setFilters({
                                ...filters,
                                medicine_brands: brandNames,
                              });
                            }
                          }
                        }}
                        key={item.value}
                        label={item.label}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Product Form</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <Form.Check type="checkbox" label="Drop" />
                    <Form.Check type="checkbox" label="Injection" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Prescription Required</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <Form.Check type="checkbox" label="Required" />
                    <Form.Check type="checkbox" label="Not Required" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Usage</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <Form.Check type="checkbox" label="Fever" />
                    <Form.Check type="checkbox" label="Cough & Cold" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Age</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <Form.Check type="checkbox" label="All" />
                    <Form.Check type="checkbox" label="Child" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="search-page--right-panel">
              <div className="search-page--header">
                <div className="flex-column">
                  <span className="font-size-14">Search Results</span>
                  <span className="font-size-26">"{searchedQuery}"</span>
                </div>
                <div className="flex-items-center">
                  <span>Sort By</span>
                  <span>
                    <Dropdown
                      className="dropdown-wrapper"
                      onSelect={(value) => {
                        setSortBy(value);
                      }}
                    >
                      <Dropdown.Toggle variant="white" id="dropdown-basic">
                        {sortBy}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {SORT_BY_MENUS.map((item) => (
                          <Dropdown.Item eventKey={item.label} key={item.value}>
                            {item.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </div>
              </div>
              <div className="margin-top-12">
                {filteredListingData &&
                  filteredListingData.searchedData &&
                  filteredListingData.searchedData.map((item) => (
                    <Card className="m-b-12">
                      <Card.Body>
                        <div className="flex-column">
                          <div className="flex-content-sb">
                            <div className="flex-column">
                              <span className="font-weight-700">
                                {item?.name}
                              </span>
                              {/* <span className="tablets-strip">
                          strip of 15 tablets
                        </span> */}
                            </div>

                            <div className="flex-column">
                              <span>₹{item?.sell_price || 0}</span>
                            </div>
                          </div>

                          <div className="search-page--counter-wrapper">
                            <div className="search-page-wrapper">
                              <div className="increment-decrement-counter-wrapper">
                                -
                              </div>

                              <div className="search-page--counter-value">
                                0
                              </div>

                              <div className="increment-decrement-counter-wrapper">
                                +
                              </div>
                            </div>
                            <div className="search-page--add-cart">
                              ADD TO CART
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            </div>
            <div className="filter-button">
              <Button
                onClick={() => setShow(true)}
                className="funner-filter--wrapper"
              >
                <FunnelFill
                  size={30}
                  color="#28b8b0"
                  className="mr-20 cursor-pointer"
                />
              </Button>
            </div>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Apply Filters</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Accordion flush className="m-b-12">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <span className="apply-filter--count">0</span>
                        Active Filters
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion flush className="m-b-12">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Brands</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <Form.Check type="checkbox" label="StayHappi" />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion flush className="m-b-12">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Product Form</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <Form.Check type="checkbox" label="Drop" />
                        <Form.Check type="checkbox" label="Injection" />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion flush className="m-b-12">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Prescription Required</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <Form.Check type="checkbox" label="Required" />
                        <Form.Check type="checkbox" label="Not Required" />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion flush className="m-b-12">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Usage</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <Form.Check type="checkbox" label="Fever" />
                        <Form.Check type="checkbox" label="Cough & Cold" />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion flush className="m-b-12">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Age</Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <Form.Check type="checkbox" label="All" />
                        <Form.Check type="checkbox" label="Child" />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="filter-apply-button">
                    <div className="d-grid gap-2">
                      <Button size="lg" className="apply-button--wrapper">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        ) : (
          <EmptyState
            actions={
              <p>
                <Button
                  onClick={() => history.push("/medicine")}
                  style={{
                    border: "none",
                    backgroundColor: "#28b8b0",
                  }}
                >
                  + Add Medicine
                </Button>
              </p>
            }
          />
        )}
      </>
    );
  }
};

export default SearchPage;
