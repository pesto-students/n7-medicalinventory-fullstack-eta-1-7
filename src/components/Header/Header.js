import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import {
  PersonCircle,
  CartFill,
  PlusCircle,
  Search,
} from "react-bootstrap-icons";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedData } from "../../features/search/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchedQuery, setSearchedQuery] = useState("");

  const getSearchedData = () => {
    console.log({ searchedQuery });
    dispatch(getSearchedData({ searchedQuery }));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="lg"
        fixed="top"
        variant="dark"
        className="header-wrapper"
      >
        <Container fluid>
          <Navbar.Brand href="#home">Medical Inventory</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Form
                className="search-box"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("qwerty");
                }}
              >
                <Form.Control
                  placeholder="Search.."
                  type="text"
                  name="searchbox"
                  value={searchedQuery}
                  className="header-form-control"
                  onChange={(e) => {
                    setSearchedQuery(e.target.value);
                  }}
                />
                <Button
                  type="submit"
                  disabled={!searchedQuery}
                  style={{
                    border: "none",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    backgroundColor: "#28b8b0",
                  }}
                  onClick={() => {
                    getSearchedData();
                  }}
                >
                  <Search size={25} />
                </Button>
              </Form>
            </Nav>
            <Nav>
              <div>
                <PlusCircle
                  size={30}
                  color="#28b8b0"
                  className="pointer-margin-right-20"
                />
                <CartFill
                  size={30}
                  color="#28b8b0"
                  className="pointer-margin-right-20"
                  onClick={() => {
                    history.push("/checkout");
                  }}
                />
                <PersonCircle
                  size={30}
                  color="#28b8b0"
                  className="cursor-pointer"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
