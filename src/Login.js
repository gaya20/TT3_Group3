import logo from './logo.svg';
import './App.css';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const AttemptLogin = () => {
    
}

const Login = () => {
    return (
      <div>
        <form onSumit={ AttemptLogin }>
          <div><pre>Username   <input className="Username"></input></pre></div>
          <div><pre>Password   <input className="Password"></input></pre></div>
          <button className="Button" type="submit">Login</button>
        </form>
      </div>
    );
  }

  export default Login;