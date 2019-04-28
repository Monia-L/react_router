import React, { Component } from "react"
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Home from "./screen/Home";
import History from "./screen/History";
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <header>
            <ul>
              <li className="selected">
            <NavLink exact to="/">Page Home</NavLink>
              </li>
              <li  className="selected">
            <NavLink to="/history" activeClassName="selected">Page History</NavLink>
             </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route path="/history" component= {History}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
