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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import EmptyState from "../../components/EmptyState/EmptyState";
import { getSearchedData } from "../../features/search/searchSlice";
import ls from "local-storage";

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

const PRODUCT_FORM = [
  { label: "Tablet", value: "Tablet" },
  { label: "Syrup", value: "Syrup" },
  { label: "Drop", value: "Drop" },
  { label: "Injection", value: "Injection" },
  { label: "Capsule", value: "Capsule" },
];

const PRESCRIPTION_REQUIRED = [
  { label: "Required", value: "true" },
  { label: "Not Required", value: "false" },
];

const AGE = [
  { label: "All", value: "All" },
  { label: "Child", value: "Child" },
];

const SearchPage = ({ location }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const searchedQuery = params.get("searchQuery");
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");
  const [currentAddToCartIndex, setCurrentAddToCartIndex] = useState(null);
  const [filters, setFilters] = useState({
    medicine_brand: [],
    product_form: [],
    presecription_required: [],
    age: [],
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("asc")) {
      if (params.get("asc") === "true") {
        setSortBy("Price: Low to High");
      } else {
        setSortBy("Price: High to Low");
      }
    }

    const paramsToObject = Object.fromEntries(params.entries());

    const copyFilters = { ...filters };

    copyFilters.medicine_brand =
      paramsToObject && paramsToObject.medicine_brand
        ? paramsToObject.medicine_brand.split(",")
        : [];
    copyFilters.product_form =
      paramsToObject && paramsToObject.product_form
        ? paramsToObject.product_form.split(",")
        : [];
    copyFilters.presecription_required =
      paramsToObject && paramsToObject.presecription_required
        ? paramsToObject.presecription_required.split(",")
        : [];
    copyFilters.age =
      paramsToObject && paramsToObject.age ? paramsToObject.age.split(",") : [];

    setFilters(copyFilters);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (sortBy !== "Relevance") {
      if (params.get("asc")) {
        params.delete("asc");
      }
      params.append("asc", sortBy === "Price: Low to High" ? "true" : "false");
      dispatch(getSearchedData(params));
      history.push(`/search?${params}`);
    } else {
      if (params.get("asc")) {
        params.delete("asc");
      }
      dispatch(getSearchedData(params));
      history.push(`/search?${params}`);
    }
  }, [sortBy]);

  useEffect(() => {
    if (
      filters.medicine_brand.length > 0 ||
      filters.product_form.length > 0 ||
      filters.presecription_required > 0 ||
      filters.age.length > 0
    ) {
      const params = new URLSearchParams(location.search);
      let updatedFilters = { ...filters };

      updatedFilters.medicine_brand = updatedFilters.medicine_brand.toString();
      updatedFilters.product_form = updatedFilters.product_form.toString();
      updatedFilters.presecription_required =
        updatedFilters.presecription_required.toString();
      updatedFilters.age = updatedFilters.age.toString();

      Object.keys(updatedFilters).forEach((key) => {
        if (updatedFilters[key]) {
          if (params.get(key)) {
            params.delete(key);
          }
          params.append(key, updatedFilters[key]);
        }
      });

      dispatch(getSearchedData(params));
      history.push(`/search?${params}`);
    }
  }, [filters]);

  const clearFilter = () => {
    const params = new URLSearchParams(location.search);

    params.delete("medicine_brand");
    params.delete("product_form");
    params.delete("presecription_required");
    params.delete("age");

    dispatch(getSearchedData(params));
    history.push(`/search?${params}`);
    setFilters({
      medicine_brand: [],
      product_form: [],
      presecription_required: [],
      age: [],
    });
  };

  const checkDuplicate = (currentItem, oldItems) => {
    if (oldItems.length == 0) {
      currentItem.count = 1;
      oldItems.push(currentItem);
      return oldItems;
    }
    let isFind = false;
    let findIndex;
    for (let itemIndex = 0; itemIndex < oldItems.length; itemIndex++) {
      if (oldItems[itemIndex].id === currentItem.id) {
        findIndex = itemIndex;
        isFind = true;
      }
    }
    if (isFind) {
      oldItems[findIndex].count = oldItems[findIndex].count + 1;
      return oldItems;
    }
    currentItem.count = 1;
    oldItems.push(currentItem);
    return oldItems;
  };

  const handleAddToCart = (item, index) => {
    let currentItem = { ...item };
    let oldItems = JSON.parse(ls.get("cartData")) || [];
    let updateOld = checkDuplicate(currentItem, oldItems);

    ls.set("cartData", JSON.stringify(updateOld));

    //////
    setCurrentAddToCartIndex(index);
    setTimeout(() => {
      setCurrentAddToCartIndex(null);
    }, 1000);
  };

  let filteredListingData = useSelector((state) => state.search);

  if (filteredListingData.status === "failed") {
    return <>Error</>;
  }

  if (
    filteredListingData.status === "success" ||
    filteredListingData.status === "loading"
  ) {
    return (
      <>
        <div className="search-page-wrapper">
          <div className="search-page--left-panel">
            <div className="m-b-12 clear-filter-wrapper">
              <h4>Filters</h4>
              <span className="clear-filter" onClick={() => clearFilter()}>
                Clear Filters
              </span>
            </div>
            <Accordion flush className="m-b-12">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Brands</Accordion.Header>
                <Accordion.Body className="accordion-body">
                  {BRANDS_FILTER.map((item) => (
                    <Form.Check
                      type="checkbox"
                      name={item.value}
                      checked={
                        filters.medicine_brand.indexOf(item.value) !== -1
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          let brandNames = filters.medicine_brand;
                          brandNames.push(e.target.name);
                          setFilters({
                            ...filters,
                            medicine_brand: brandNames,
                          });
                        } else {
                          if (
                            filters.medicine_brand.indexOf(e.target.name) !== -1
                          ) {
                            let brandNames = filters.medicine_brand;
                            brandNames.splice(
                              filters.medicine_brand.indexOf(e.target.name),
                              1
                            );

                            setFilters({
                              ...filters,
                              medicine_brand: brandNames,
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
                  {PRODUCT_FORM.map((item) => (
                    <Form.Check
                      type="checkbox"
                      name={item.value}
                      checked={filters.product_form.indexOf(item.value) !== -1}
                      onChange={(e) => {
                        if (e.target.checked) {
                          let brandNames = filters.product_form;
                          brandNames.push(e.target.name);
                          setFilters({
                            ...filters,
                            product_form: brandNames,
                          });
                        } else {
                          if (
                            filters.product_form.indexOf(e.target.name) !== -1
                          ) {
                            let brandNames = filters.product_form;
                            brandNames.splice(
                              filters.product_form.indexOf(e.target.name),
                              1
                            );

                            setFilters({
                              ...filters,
                              product_form: brandNames,
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
                <Accordion.Header>Prescription Required</Accordion.Header>
                <Accordion.Body className="accordion-body">
                  {PRESCRIPTION_REQUIRED.map((item) => (
                    <Form.Check
                      type="checkbox"
                      name={item.value}
                      checked={
                        filters.presecription_required.indexOf(item.value) !==
                        -1
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          let brandNames = filters.presecription_required;
                          brandNames.push(e.target.name);
                          setFilters({
                            ...filters,
                            presecription_required: brandNames,
                          });
                        } else {
                          if (
                            filters.presecription_required.indexOf(
                              e.target.name
                            ) !== -1
                          ) {
                            let brandNames = filters.presecription_required;
                            brandNames.splice(
                              filters.presecription_required.indexOf(
                                e.target.name
                              ),
                              1
                            );

                            setFilters({
                              ...filters,
                              presecription_required: brandNames,
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

            {/* <Accordion flush className="m-b-12">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Usage</Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    <Form.Check type="checkbox" label="Fever" />
                    <Form.Check type="checkbox" label="Cough & Cold" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}

            <Accordion flush className="m-b-12">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Age</Accordion.Header>
                <Accordion.Body className="accordion-body">
                  {AGE.map((item) => (
                    <Form.Check
                      type="checkbox"
                      name={item.value}
                      checked={filters.age.indexOf(item.value) !== -1}
                      onChange={(e) => {
                        if (e.target.checked) {
                          let brandNames = filters.age;
                          brandNames.push(e.target.name);
                          setFilters({
                            ...filters,
                            age: brandNames,
                          });
                        } else {
                          if (filters.age.indexOf(e.target.name) !== -1) {
                            let brandNames = filters.age;
                            brandNames.splice(
                              filters.age.indexOf(e.target.name),
                              1
                            );

                            setFilters({
                              ...filters,
                              age: brandNames,
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
              {filteredListingData.status === "loading" ? (
                <div>
                  <Loader inline={true} />
                </div>
              ) : (
                <>
                  {filteredListingData &&
                  filteredListingData.searchedData &&
                  filteredListingData.searchedData.length ? (
                    <>
                      {filteredListingData.searchedData.map((item, i) => (
                        <Card className="m-b-12" key={item.id}>
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
                                <div className="search-page-wrapper"></div>
                                <div
                                  id="addToCartWrapper"
                                  style={{ display: "flex" }}
                                >
                                  {currentAddToCartIndex === i && (
                                    <div className="search-page--add-cart">
                                      &#10003;
                                    </div>
                                  )}
                                  &nbsp;
                                  {currentAddToCartIndex !== i ? (
                                    <div
                                      className="search-page--add-cart"
                                      onClick={() => {
                                        handleAddToCart(item, i);
                                      }}
                                    >
                                      ADD TO CART
                                    </div>
                                  ) : (
                                    <>
                                      {currentAddToCartIndex === i && (
                                        <div
                                          id="addToCart"
                                          className="search-page--add-cart"
                                        >
                                          ADDED
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      ))}
                    </>
                  ) : (
                    <EmptyState />
                  )}
                </>
              )}
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
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Brands</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      {BRANDS_FILTER.map((item) => (
                        <Form.Check
                          type="checkbox"
                          name={item.value}
                          checked={
                            filters.medicine_brand.indexOf(item.value) !== -1
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              let brandNames = filters.medicine_brand;
                              brandNames.push(e.target.name);
                              setFilters({
                                ...filters,
                                medicine_brand: brandNames,
                              });
                            } else {
                              if (
                                filters.medicine_brand.indexOf(
                                  e.target.name
                                ) !== -1
                              ) {
                                let brandNames = filters.medicine_brand;
                                brandNames.splice(
                                  filters.medicine_brand.indexOf(e.target.name),
                                  1
                                );

                                setFilters({
                                  ...filters,
                                  medicine_brand: brandNames,
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
                      {PRODUCT_FORM.map((item) => (
                        <Form.Check
                          type="checkbox"
                          name={item.value}
                          checked={
                            filters.product_form.indexOf(item.value) !== -1
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              let brandNames = filters.product_form;
                              brandNames.push(e.target.name);
                              setFilters({
                                ...filters,
                                product_form: brandNames,
                              });
                            } else {
                              if (
                                filters.product_form.indexOf(e.target.name) !==
                                -1
                              ) {
                                let brandNames = filters.product_form;
                                brandNames.splice(
                                  filters.product_form.indexOf(e.target.name),
                                  1
                                );

                                setFilters({
                                  ...filters,
                                  product_form: brandNames,
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
                    <Accordion.Header>Prescription Required</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      {PRESCRIPTION_REQUIRED.map((item) => (
                        <Form.Check
                          type="checkbox"
                          name={item.value}
                          checked={
                            filters.presecription_required.indexOf(
                              item.value
                            ) !== -1
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              let brandNames = filters.presecription_required;
                              brandNames.push(e.target.name);
                              setFilters({
                                ...filters,
                                presecription_required: brandNames,
                              });
                            } else {
                              if (
                                filters.presecription_required.indexOf(
                                  e.target.name
                                ) !== -1
                              ) {
                                let brandNames = filters.presecription_required;
                                brandNames.splice(
                                  filters.presecription_required.indexOf(
                                    e.target.name
                                  ),
                                  1
                                );

                                setFilters({
                                  ...filters,
                                  presecription_required: brandNames,
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
                    <Accordion.Header>Age</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                      {AGE.map((item) => (
                        <Form.Check
                          type="checkbox"
                          name={item.value}
                          checked={filters.age.indexOf(item.value) !== -1}
                          onChange={(e) => {
                            if (e.target.checked) {
                              let brandNames = filters.age;
                              brandNames.push(e.target.name);
                              setFilters({
                                ...filters,
                                age: brandNames,
                              });
                            } else {
                              if (filters.age.indexOf(e.target.name) !== -1) {
                                let brandNames = filters.age;
                                brandNames.splice(
                                  filters.age.indexOf(e.target.name),
                                  1
                                );

                                setFilters({
                                  ...filters,
                                  age: brandNames,
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

                <div className="filter-apply-button">
                  <div className="d-grid gap-2">
                    <Button
                      size="lg"
                      className="apply-button--wrapper"
                      onClick={() => setShow(false)}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
};

export default SearchPage;
