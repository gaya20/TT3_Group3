import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import store from './store.js';
import HomePage from '../src/components/HomePage'
import TransactionHistory from '../src/components/TransactionHistoryPage/TransactionHistory'
import CurrentPricing from '../src/components/CurrentPricing/CurrentPricing'
import UserInfo from '../src/components/UserInfo/UserInfo'
import LoggedOutPage from '../src/components/LoggedOutPage/LoggedOutPage'
import CallLoginAPI from './LoginAPI'
import TradeAssets from './components/TradeAssetsPage/TradeAssets';

const PersistantLogin = () => {
  console.log(document.cookie)

  var username = getCookie("username");
  var password = getCookie("password");

  if (getCookie("login") == "true")
  {
    CallLoginAPI(username, password, false);
  }

}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  
  for(var i = 0; i < ca.length; i++) 
  {
    var c = ca[i];
    
    while (c.charAt(0) == ' ') 
    {
      c = c.substring(1);
    }
    
    if (c.indexOf(name) == 0) 
    {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

const App = () => {

  if (store.getState().LoginSuccess == false)
  {
    PersistantLogin();
  }
  
  if (store.getState().LoginSuccess)
  {
    return (
      <div>
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path ='/' component={HomePage} />
                  <Route exact path = '/TransactionHistoryPage' component = {TransactionHistory}/>
                  <Route exact path = '/CurrentPricingPage' component = {CurrentPricing}/>
                  <Route exact path = '/UserInfoPage' component = {UserInfo}/>
                  <Route exact path = '/GoodbyePage' component = {LoggedOutPage}/>
                  <Route exact path = '/TradeAssetsPage' componet = {TradeAssets}/>
              </Switch>
          </div>
      </Router>
      </div>
    );
  }
  else
  {
    return <Login/>
  }
  
}

export default App;
