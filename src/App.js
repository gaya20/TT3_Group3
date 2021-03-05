import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './Login.js';
import store from './store.js';

const App = () => {

  if (store.getState().LoginSuccess)
  {
    return (<div>Log in success</div>);
  }
  else
  {
    return <Login />;
  }
}

export default App;
