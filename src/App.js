import React, { useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  createTokenAsync,
  log,
  logout,
  selectLoggedIn,
  selectUser,
} from "./features/login/loginSlice";
import Landing from "./screens/LoginScreen/Landing";
import Employee from "./screens/Employee/Employee";
import Header from "./components/Header/Header";
import ErrorBoundry from "./components/ErrorBoundary/ErrorBoundary";
import { AUTH_TOKEN } from "./localStorage";
import Loader from "./components/Loader/Loader";
import axios from './axios'
import { useHistory } from "react-router";
import ls from 'local-storage'
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
  const history = useHistory();
  console.log(loggedIn);
  const shops = useSelector((state) => state.shop.shops);
  const checkTokenValidation = async () => {
    try {
        const response = await axios.post('/api-token-auth/',{},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${ls.get('token')}`
            },
          })
        dispatch(log(response.data.isAdmin))
        
    } 
      catch (error) {
        dispatch(logout())

      }

}
  useEffect(() => {
    const token = AUTH_TOKEN;
    console.log(token);
    if (token) {
      checkTokenValidation()
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
              <React.Suspense fallback={<Loader />}>
                <ErrorBoundry>
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
