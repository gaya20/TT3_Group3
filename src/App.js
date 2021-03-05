import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import store from './store.js';
import HomePage from '../src/components/HomePage'
import TestPage from '../src/components/TestPage'
import TransactionHistory from '../src/components/TransactionHistoryPage/TransactionHistory'
import CurrentPricing from '../src/components/CurrentPricing/CurrentPricing'
import UserInfo from '../src/components/UserInfo/UserInfo'
import LoggedOutPage from '../src/components/LoggedOutPage/LoggedOutPage'

const App = () => {

  if (store.getState().LoginSuccess)
  {
    return (
      <div>
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/TestPage' component={TestPage} />
                  <Route exact path = '/TransactionHistoryPage' component = {TransactionHistory}/>
                  <Route exact path = '/CurrentPricingPage' component = {CurrentPricing}/>
                  <Route exact path = '/UserInfoPage' component = {UserInfo}/>
                  <Route exact path = '/GoodbyePage' component = {LoggedOutPage}/>
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
