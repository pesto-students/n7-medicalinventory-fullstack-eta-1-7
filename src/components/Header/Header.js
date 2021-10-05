import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import {
  PersonCircle,
  CartFill,
  PlusCircle,
  Search,
  PersonPlus,
} from "react-bootstrap-icons";
import "./Header.css";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedData } from "../../features/search/searchSlice";
import { selectIsAdmin } from "../../features/login/loginSlice";


const Header = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectIsAdmin)
  const history = useHistory();
  const location = useLocation();
  const [searchedQuery, setSearchedQuery] = useState("");

  const getFilteredData = async () => {
    await dispatch(getSearchedData({ searchedQuery: searchedQuery }));

    history.push({
      pathname: `/search`,
      search: `?searchedQuery=${searchedQuery}`,
    });
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
                    getFilteredData();
                  }}
                >
                  <Search size={25} />
                </Button>
              </Form>
            </Nav>

            <Nav>
              <div className="nav-icon--right">
                {isAdmin && (
                  <PersonPlus
                    size={30}
                    color="#28b8b0"
                    className="pointer-margin-right-20"
                    onClick={() => {
                      history.push("/employee");
                    }}
                  />
                )}
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
            {isAdmin && (
              <Nav className="nav-bar--small-screen">
                <div className="nav-bar-icons--responsive">
                  <span>
                    <PersonPlus size={30} color="#28b8b0" />
                  </span>
                  &nbsp; Add Employee
                </div>
              </Nav>
            )}
            <Nav className="nav-bar--small-screen">
              <div className="nav-bar-icons--responsive">
                <span>
                  <PlusCircle size={30} color="#28b8b0" />
                </span>
                &nbsp; Add Medicine
              </div>
            </Nav>
            <Nav className="nav-bar--small-screen">
              <div className="nav-bar-icons--responsive">
                <span>
                  <CartFill
                    size={30}
                    color="#28b8b0"
                    onClick={() => {
                      history.push("/checkout");
                    }}
                  />
                </span>
                &nbsp; Go To Cart
              </div>
            </Nav>
            <Nav className="nav-bar--small-screen">
              <div className="nav-bar-icons--responsive">
                <span>
                  <PersonCircle size={30} color="#28b8b0" />
                </span>
                &nbsp; Profile
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
