import React, { useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  createTokenAsync,
  log,
  selectLoggedIn,
  selectUser,
} from "./features/login/loginSlice";
import Landing from "./screens/LoginScreen/Landing";
import Employee from "./screens/Employee/Employee";
import Header from "./components/Header/Header";
import ErrorBoundry from "./components/ErrorBoundary/ErrorBoundary";
import { AUTH_TOKEN } from "./localStorage";
import Loader from "./components/Loader/Loader";

const Checkout = React.lazy(() =>
  import(/* webpackChunkName: 'checkout' */ "./screens/Checkout/Checkout")
);

const SearchPage = React.lazy(() =>
  import(/* webpackChunkName: 'checkout' */ "./screens/SearchPage/SearchPage")
);

const Medicine = React.lazy(() =>
  import(/* webpackChunkName: 'checkout' */ "./screens/Medicine/Medicine")
);

function App() {
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  console.log(loggedIn);
  const user = AUTH_TOKEN;
  const shops = useSelector((state) => state.shop.shops);

  useEffect(() => {
    const token = AUTH_TOKEN;
    console.log(token);
    if (token) {
      dispatch(log());
    }
  }, []);

  return (
    <div className="app">
      <Router>
        {!loggedIn ? (
          <LoginScreen />
        ) : (
          <>
            <React.Suspense fallback={<Loader />}>
              <ErrorBoundry>
                <Header />
                <div className="app-wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={shops.length === 0 ? Landing : HomeScreen}
                    ></Route>
                    <Route path="/employee" component={Employee}></Route>
                    <Route path="/search/:params?" component={SearchPage} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/medicine" component={Medicine} />
                  </Switch>
                </div>
              </ErrorBoundry>
            </React.Suspense>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
