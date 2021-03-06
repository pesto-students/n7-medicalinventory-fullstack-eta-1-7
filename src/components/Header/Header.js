import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Overlay,
  Tooltip,
} from "react-bootstrap";
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
import { logout, selectIsAdmin } from "../../features/login/loginSlice";
import ls from "local-storage";
import axios from "axios";
import { toast } from "../../components/Toast/Toast";
const Header = () => {
  const target = useRef(null);
  const profileTarget = useRef(null);
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectIsAdmin);
  const history = useHistory();
  const location = useLocation();
  const [searchedQuery, setSearchedQuery] = useState("");
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("searchQuery")) {
      dispatch(getSearchedData(params.toString()));
      setSearchedQuery(params.get("searchQuery"));
    }
  }, []);

  const logoutToken = async () => {
    const config = {
      headers: {
        Authorization: `Token ${ls.get("token")}`,
      },
    };

    await axios
      .get("https://abdulrashidalaskar.pythonanywhere.com/logout/", config)
      .then((response) => {
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong!");
      });
  };

  const getFilteredData = async () => {
    if (searchedQuery) {
      const params = new URLSearchParams({ searchQuery: searchedQuery });
      dispatch(getSearchedData(params));
      history.push(`/search?${params}`);
    }
    setIsHeaderExpanded(false);
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
        expanded={isHeaderExpanded}
        onToggle={(value) => {
          setIsHeaderExpanded(value);
        }}
      >
        <Container fluid>
          <Navbar.Brand onClick={() => history.replace("/")}>
            Medical Inventory
          </Navbar.Brand>
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
                  onClick={() => {
                    history.push("/medicine");
                  }}
                />
                <CartFill
                  size={30}
                  color="#28b8b0"
                  className="pointer-margin-right-20"
                  onClick={() => {
                    history.push("/checkout");
                  }}
                />
                <Overlay
                  show={show}
                  target={target.current}
                  rootClose={true}
                  onHide={() => setShow(!show)}
                  rootCloseEvent="click"
                  placement="bottom-end"
                >
                  <Tooltip>
                    <div className="logout-overlay-tooltip">
                      <Button
                        onClick={() => {
                          logoutToken();
                          dispatch(logout());
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  </Tooltip>
                </Overlay>
                <PersonCircle
                  ref={target}
                  size={30}
                  color="#28b8b0"
                  className="cursor-pointer"
                  onClick={() => {
                    setShow(!show);
                  }}
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
              <div
                className="nav-bar-icons--responsive"
                onClick={() => {
                  history.push("/checkout");
                  setIsHeaderExpanded(false);
                }}
              >
                <span>
                  <CartFill size={30} color="#28b8b0" />
                </span>
                &nbsp; Go To Cart
              </div>
            </Nav>
            <Nav className="nav-bar--small-screen">
              <div className="nav-bar-icons--responsive">
                <span>
                  <Overlay
                    show={showLogout}
                    target={profileTarget.current}
                    rootClose={true}
                    onHide={() => setShowLogout(!showLogout)}
                    rootCloseEvent="click"
                    placement="bottom-start"
                  >
                    <Tooltip>
                      <div className="logout-overlay-tooltip">
                        <Button
                          onClick={() => {
                            logoutToken();
                            dispatch(logout());
                          }}
                        >
                          Logout
                        </Button>
                      </div>
                    </Tooltip>
                  </Overlay>
                  <PersonCircle
                    ref={profileTarget}
                    size={30}
                    color="#28b8b0"
                    className="cursor-pointer"
                    onClick={() => {
                      setShowLogout(!showLogout);
                    }}
                  />
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
