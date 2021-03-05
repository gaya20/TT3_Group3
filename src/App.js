import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import './App.css';
import TestPage from "./components/TestPage";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/TestPage' component={TestPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
    )
}

export default App;
