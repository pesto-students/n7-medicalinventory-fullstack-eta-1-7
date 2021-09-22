import React,{useEffect} from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {useDispatch,useSelector} from 'react-redux'
import { createTokenAsync, log, selectLoggedIn, selectUser } from './features/login/loginSlice';
import ls from 'local-storage'
import Landing from './screens/LoginScreen/Landing';
import Employee from './screens/Employee/Employee';
function App() {
  
  const loggedIn = useSelector(selectLoggedIn)
  const dispatch = useDispatch()

  console.log(loggedIn)
  const user = ls.get('token')
  const shops = useSelector(state => state.shop.shops)

  useEffect(() => {
    const token = ls.get('token')
    console.log(token)
    if(token){
      dispatch(log())
    }
    
  }, [])

  return (
    <div className="app">
    <Router>
        {!loggedIn ? 
        (<LoginScreen/>):
        
        <Switch>
        <Route exact path="/" component={shops.length === 0 ? Landing : HomeScreen}>
        </Route>
        <Route  path="/employee" component={Employee}>
        </Route>
      </Switch>
     }

    </Router>
    </div>
  );
}

export default App;
