import React from 'react';
import Main from './Components/main.js';
import "./Components/Navbar"
import { Route, Switch } from 'react-router-dom';
import Login from './Auth/login';
import Register from './Auth/Register';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/Main/:id/:name" component={Main} />
        <Route path="/Register" component ={Register} />
      </Switch>
    </div>
  );
}

export default App;
