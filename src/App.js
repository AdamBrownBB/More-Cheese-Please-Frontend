import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import NavBar from './containers/NavBar';
import PlateSearch from './containers/PlateSearch';
import CheeseSearch from './containers/CheeseSearch';
import DrinkSearch from './containers/DrinkSearch';


function App() {
  return (
        <Router>
        <NavBar />
        <Route path="/plates" component={PlateSearch}/>
        <Route path="/cheeses" component={CheeseSearch}/>
        <Route path="/drinks" component={DrinkSearch}/>
      </Router>
       
  );
}

export default App;
