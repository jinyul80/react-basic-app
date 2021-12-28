import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/post" component={Post}></Route>
        <Route path="/user" component={User}></Route>
      </Switch>
    </div>
  );
}

export default App;
