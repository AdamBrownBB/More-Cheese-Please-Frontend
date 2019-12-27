import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './containers/NavBar';
import PlateSearch from './containers/PlateSearch';
import CheeseSearch from './containers/CheeseSearch';
import DrinkSearch from './containers/DrinkSearch';

class App extends Component {

  state = {
    cheeses: [],
    drinks: []
  }

  componentDidMount() {
    this.fetchCheeses()
    this.fetchDrinks()

  }



  fetchCheeses = () => {
    fetch("http://localhost:3001/cheeses")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          cheeses: data
        }))
  }

  fetchDrinks = () => {
    fetch("http://localhost:3001/drinks")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          drinks: data
        }))
  }



  renderPlateSearch = () => {
    return < PlateSearch 
                        cheeses={this.state.cheeses}
                        drinks={this.state.drinks} 
                        // plates={this.state.plates}
                        // addPlate={this.addPlate} 
                        />
  }  


  render() { 
    
    return (
      <Router>
        <NavBar />
        <Route path="/plates" render={this.renderPlateSearch}/>
        <Route path="/cheeses" component={CheeseSearch}/>
        <Route path="/drinks" component={DrinkSearch}/>
      </Router>
       
  )}
}

export default App;
