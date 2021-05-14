import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={()=><MainPage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
