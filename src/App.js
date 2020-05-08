import React from 'react';
import "./Search_bar.css"
import Main from "./Main";
import Profile from "./Profile";
import "./Navbar"
import { Route, Switch } from 'react-router-dom';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact/>
       <Route path="/Main" component={Main} />
        <Route path="/Profile" component ={Profile} />
      </Switch>
    </div>
  );
}

export default App;
