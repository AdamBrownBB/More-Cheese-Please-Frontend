import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from './redux/reducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import NavBar from './containers/NavBar';
import PlateSearch from './containers/PlateSearch';
import CheeseSearch from './containers/CheeseSearch';
import DrinkSearch from './containers/DrinkSearch';


const store = createStore(reducer)


function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route path="/plates" component={PlateSearch}/>
        <Route path="/cheeses" component={CheeseSearch}/>
        <Route path="/drinks" component={DrinkSearch}/>
      </Router>
    </Provider>
    
  );
}

export default App;
