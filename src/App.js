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
import ls from "local-storage";
import Landing from "./screens/LoginScreen/Landing";
import Employee from "./screens/Employee/Employee";
import Header from "./components/Header/Header";
import ErrorBoundry from "./components/ErrorBoundary";

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
  const user = ls.get("token");
  const shops = useSelector((state) => state.shop.shops);

  useEffect(() => {
    const token = ls.get("token");
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
            <Header />
            <div className="app-wrapper">
              <React.Suspense fallback="Loading...">
                <ErrorBoundry>
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={shops.length === 0 ? Landing : HomeScreen}
                    ></Route>
                    <Route path="/employee" component={Employee}></Route>
                    <Route path="/search" component={SearchPage} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/medicine" component={Medicine} />
                  </Switch>
                </ErrorBoundry>
              </React.Suspense>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
