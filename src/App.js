import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./containers/NavBar";
import PlateSearch from "./containers/PlateSearch";
import CheeseSearch from "./containers/CheeseSearch";
import DrinkSearch from "./containers/DrinkSearch";
// import { config } from "./constants/constants";
// const url = config.url.API_URL;

const url = "http://localhost:3000";
class App extends Component {
  state = {
    cheeses: [],
    drinks: [],
  };

  componentDidMount() {
    this.fetchCheeses();
    this.fetchDrinks();
  }

  fetchCheeses = () => {
    fetch(`${url}/cheeses`)
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          cheeses: data,
        })
      );
  };

  fetchDrinks = () => {
    fetch(`${url}/drinks`)
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          drinks: data,
        })
      );
  };

  renderPlateSearch = () => {
    return (
      <PlateSearch
        cheeses={this.state.cheeses}
        drinks={this.state.drinks}
        // plates={this.state.plates}
        // addPlate={this.addPlate}
      />
    );
  };

  renderCheeseSearch = () => {
    return (
      <CheeseSearch
        cheeses={this.state.cheeses}
        // drinks={this.state.drinks}
      />
    );
  };

  renderDrinkSearch = () => {
    return (
      <DrinkSearch
        // cheeses={this.state.cheeses}
        drinks={this.state.drinks}
      />
    );
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/plates" render={this.renderPlateSearch} />
        <Route path="/cheeses" render={this.renderCheeseSearch} />
        <Route path="/drinks" render={this.renderDrinkSearch} />
      </Router>
    );
  }
}

export default App;
