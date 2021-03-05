import store from './store.js';

const URL = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";
const API_KEY = "895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH";

const LoginAPI_Result = (status, username, password, first_time) => {
    
    if (status == 200)
    {
        store.dispatch({ type: 'Login Success', 
                            payload: {
                                Username: username,
                                Password: password 
                            }});
        
        const state = store.getState();

        // Update
        if (first_time)
        {
            localStorage.username = state.RememberMe ? username : "";
            localStorage.password = state.RememberMe ? password : "";

            document.cookie = "username=" + username + ";";
            document.cookie = "password=" + password + ";";
            document.cookie = "login=true;";
        }
    }
    else 
    {
        if (first_time)
        {
            store.dispatch({ type: 'Login Error' });
        }

        document.cookie = "login=;";
    }
}

const CallLoginAPI = (username, password, first_time) => {

    fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
           'x-api-key': API_KEY,
        },
        body: '{"username":"' + username +'", "password":"' + password + '"}'
    })
    .then(response => LoginAPI_Result(response.status, username, password, first_time))
    .catch(error => console.log(error))
}

export default CallLoginAPI;