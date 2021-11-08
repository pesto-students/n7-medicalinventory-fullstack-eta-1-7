import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout, selectIsAdmin } from "../../features/login/loginSlice";
import { currentShop } from "../../features/shop/shopSlice";
import "./Home.css";
import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import { Eyeglasses } from "react-bootstrap-icons";

function HomeScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const shops = useSelector((state) => state.shop.shops);
  const isAdmin = useSelector(selectIsAdmin);
  const [search, setSearch] = useState(true);
  return (
    <>
      {isAdmin && search ? (
        <div className="home__container">
          {shops?.map((item) => (
            <Card style={{ margin: "10px" }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(currentShop(item.id));
                      history.push("employee/");
                    }}
                    style={{ width: "20rem", marginTop: "0.1rem" }}
                  >
                    Add Employee
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(currentShop(item.id));
                      setSearch(false);
                    }}
                    style={{ width: "20rem", marginTop: "0.4rem" }}
                  >
                    Create Order
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <Header />
          <div className="search-note-wrapper">
            <Card className="search-note--content">
              <Card.Body>
                <Eyeglasses size={200} />
                <Card.Title>Search medicines in the search bar</Card.Title>
                <Card.Text>
                  Find medicines in the search bar to buy them and add to cart
                  to generate invoice
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeScreen;
