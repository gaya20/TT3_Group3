import './index.css';
import { createSlice, createStore } from '@reduxjs/toolkit'

// The store used to keep track of the information within the application
const initialState = {
    LoginSuccess : false, 
    RememberMe : false,
    ShowErrorMsg : false,
    LoginDetails: {
      Username: "",
      Password: ""
    }
  };
  
  const appReducer = (state = initialState, action) => {

    switch (action.type)
    {
      case 'Login Success':
        return { ...initialState,
                 LoginSuccess : true,
                 ShowErrorMsg : false,
                 LoginDetails : {
                     Username: action.payload.Username,
                     Password: action.payload.Password
                 } };
      case 'Set Remember Me':
        return { ...initialState, RememberMe: action.payload.value };
      case 'Login Error':
        return { ...initialState, ShowErrorMsg: true };
      case 'Logout':
        return { ...initialState, LoginSuccess : false };
      
    }
  
    return initialState;
  };
  
  const store = createStore(appReducer);

  export default store;

  