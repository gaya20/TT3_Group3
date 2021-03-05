import './App.css';
import { useState } from 'react';
import store from './store.js'
import CallLoginAPI from './LoginAPI.js';

const Login = () => {

    const [ username, setUsername ] = useState(localStorage.username);
    const [ password, setPassword ] = useState(localStorage.password);
;
    const [ rememberMe, setRememberMe ] = useState(false);

    const TryLogin = (event) => {
        event.preventDefault();

        CallLoginAPI(username, password, true);
    }

    // Functions to edit state variables
    const EditUsername = (event) => {
        setUsername(event.target.value);
    }

    const EditPassword = (event) => {
        setPassword(event.target.value);
    }
    
    const EditRememberMe = (event) => {
        setRememberMe(event.target.value);

        store.dispatch({ type: 'Set Remember Me', 
                             payload: {
                                 RememberMe: event.target.value
                             }});

    }

    return (
      <div>
        <form onSubmit={ TryLogin }>
          <div><pre>Username   <input value={ username } onChange={ EditUsername }></input></pre></div>
          <div><pre>Password   <input value={ password } onChange={ EditPassword }></input></pre></div>
          <input type="checkbox" value={ rememberMe } onChange={ EditRememberMe }></input>Remember me?
          { store.getState().ShowErrorMsg ? <div>Incorrect username or password</div> : <div></div> }
          <p></p>
          <button className="Button" type="submit">Login</button>
        </form>
      </div>
    );
  }

  export default Login;