import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  LoginDetails: {
    Login: false,
    Username: "",
    Password: ""
  }
};

const appReducer = (state = initialState, action) => {
  return initialState;
};

const store = configureStore({
  reducer: appReducer
});

const App = () => {
  return <Login />;
}

export default App;
