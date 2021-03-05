import './App.css';
import { useState } from 'react';
import store from './store.js'

const Login = () => {

    const [ username, setUsername ] = useState(localStorage.username);
    const [ password, setPassword ] = useState(localStorage.password);

    const [ showErrorMsg, setShowErrorMsg ] = useState(false);
    const [ rememberMe, setRememberMe ] = useState(false);

    const TryLogin = (event) => {
        event.preventDefault();

        // Input API code to check if username and password is correct
        if (username == "test" && password == "test")
        {
            store.dispatch({ type: 'Login Success', 
                             payload: {
                                 Username: username,
                                 Password: password 
                             }});

            // Update
            localStorage.username = rememberMe ? username : "";
            localStorage.password = rememberMe ? password : "";
            
            document.cookie = "username=" + password + ";";
            document.cookie = "password=" + password + ";";
        }
        else
        {
            setShowErrorMsg(true);
        }
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
    }

    return (
      <div>
        <form onSubmit={ TryLogin }>
          <div><pre>Username   <input value={ username } onChange={ EditUsername }></input></pre></div>
          <div><pre>Password   <input value={ password } onChange={ EditPassword }></input></pre></div>
          <input type="checkbox" value={ rememberMe } onChange={ EditRememberMe }></input>Remember me?
          { showErrorMsg ? <div>Incorrect username or password</div> : <div></div> }
          <p></p>
          <button className="Button" type="submit">Login</button>
        </form>
      </div>
    );
  }

  export default Login;