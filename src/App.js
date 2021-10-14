import React, { useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  log,
  logout,
  selectLoggedIn,
} from "./features/login/loginSlice";
import Landing from "./screens/LoginScreen/Landing";
import Employee from "./screens/Employee/Employee";

import ErrorBoundry from "./components/ErrorBoundary/ErrorBoundary";
import { AUTH_TOKEN } from "./localStorage";
import Loader from "./components/Loader/Loader";
import axios from './axios'
import ls from 'local-storage'
import { currentShop } from "./features/shop/shopSlice";
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
  const shops = useSelector((state) => state.shop.shops);
  const checkTokenValidation = async () => {
    try {
        const response = await axios.post('/api-token-auth/',{},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${ls.get('token')}`
            },
          })
        dispatch(log({admin:response.data.isAdmin,employee:response.data.employeeId,company:response.data.companyId}))
        if(!(response.data.isAdmin)){
          dispatch(currentShop(response.data.companyId))
        }
        
    } 
      catch (error) {
        dispatch(logout())

      }

}
  useEffect(() => {
    const token = ls.get('token');
    if (token) {
      checkTokenValidation()
    }
  }, []);

  return (
    <div className="app">
      <Router>
        {!ls.get('token') ? (
          <LoginScreen />
        ) : (
          <>
            <React.Suspense fallback={<Loader />}>
              <ErrorBoundry>
         
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
