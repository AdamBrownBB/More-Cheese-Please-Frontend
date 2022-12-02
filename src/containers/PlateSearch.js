import React from "react";
import { Grid } from "semantic-ui-react";

import PlateContainer from "./PlateContainer";
import SavedPlates from "./SavedPlates";
import CheeseContainer from "./CheeseContainer";
// import { config } from "./constants/constants";

// const url = config.url.API_URL
class PlateSearch extends React.Component {
  state = {
    flavor: "all",
    mildCheese: null,
    mediumCheese: null,
    boldCheese: null,
    bleuCheese: null,
    selectedDrinks: [],
    plates: [],
  };

  componentDidMount() {
    this.fetchPlates();
  }

  fetchPlates = () => {
    fetch("http://localhost:3000/plates")
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          plates: data,
        })
      );
  };

  // adds a cheese into each flavor in grid, also shows paired drinks by filtering down
  // filter only looks at last two associations, need to account for all
  // probably a good candidate for refactoring , 2x

  addCheese = (cheese) => {
    if (cheese.flavor === "mild") {
      this.setState({ mildCheese: cheese }, () => {
        if (this.state.selectedDrinks.length < 1) {
          this.setState({ selectedDrinks: this.state.mildCheese.drinks });
        } else {
          let drinkState = this.handleDrinks(this.state.mildCheese);
          this.setState({ selectedDrinks: drinkState });
        }
      });
    } else if (cheese.flavor === "medium") {
      this.setState({ mediumCheese: cheese }, () => {
        if (this.state.selectedDrinks.length < 1) {
          this.setState({ selectedDrinks: this.state.mediumCheese.drinks });
        } else {
          let drinkState = this.handleDrinks(this.state.mediumCheese);
          this.setState({ selectedDrinks: drinkState });
        }
      });
    } else if (cheese.flavor === "bold") {
      this.setState({ boldCheese: cheese }, () => {
        if (this.state.selectedDrinks.length < 1) {
          this.setState({ selectedDrinks: this.state.boldCheese.drinks });
        } else {
          let drinkState = this.handleDrinks(this.state.boldCheese);
          this.setState({ selectedDrinks: drinkState });
        }
      });
    } else if (cheese.flavor === "bleu") {
      this.setState({ bleuCheese: cheese }, () => {
        if (this.state.selectedDrinks.length < 1) {
          this.setState({ selectedDrinks: this.state.bleuCheese.drinks });
        } else {
          let drinkState = this.handleDrinks(this.state.bleuCheese);
          this.setState({ selectedDrinks: drinkState });
        }
      });
    }
  };

  handleDrinks = (cheese) => {
    console.log("next cheese selected drinks", cheese.drinks);
    console.log("prior selected", this.state.selectedDrinks);
    let finalDrinks = [];

    this.state.selectedDrinks.forEach((drink) => {
      if (cheese.drinks.find((cheesedrink) => cheesedrink.id === drink.id)) {
        finalDrinks.push(drink);
      }
    });
    console.log("final", finalDrinks);
    return finalDrinks;
  };

  suggestPlate = () => {
    let milds = [];
    let mediums = [];
    let bolds = [];
    let bleus = [];
    this.clearSelections();
    this.props.cheeses.forEach((cheese) => {
      if (cheese.flavor === "mild") {
        milds.push(cheese);
        this.shuffle(milds, "mildCheese");
      }
      if (cheese.flavor === "medium") {
        mediums.push(cheese);
        this.shuffle(mediums, "mediumCheese");
      }
      if (cheese.flavor === "bold") {
        bolds.push(cheese);
        this.shuffle(bolds, "boldCheese");
      }
      if (cheese.flavor === "bleu") {
        bleus.push(cheese);
        this.shuffle(bleus, "bleuCheese");
      }
    });
  };

  shuffle = (suggestions, flavor) => {
    let choice = suggestions[Math.floor(Math.random() * suggestions.length)];
    this.addCheese(choice);
  };

  clearSelections = () => {
    this.setState({
      mildCheese: null,
      mediumCheese: null,
      boldCheese: null,
      bleuCheese: null,
      saveCheeses: null,
      selectedDrinks: [],
    });
  };

  addPlate = (newPlate) => {
    this.setState({
      plates: [...this.state.plates, newPlate],
    });
  };

  flavorCardClick = () => {
    // fixes breaking in FlavorGrid
  };

  savePlate = (e) => {
    // e.preventDefault()
    fetch("https://more-cheese-please.herokuapp.com/plates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        name: "test",
      }),
    })
      .then((res) => res.json())
      .then((plate) => {
        this.cheeseFlavorsFetch(plate, this.state.mildCheese);
        this.cheeseFlavorsFetch(plate, this.state.mediumCheese);
        this.cheeseFlavorsFetch(plate, this.state.boldCheese);
        this.cheeseFlavorsFetch(plate, this.state.bleuCheese);
        this.addPlate(plate);
        this.clearSelections();
      });
  };

  cheeseFlavorsFetch(plate, cheeseFlavor) {
    fetch("https://more-cheese-please.herokuapp.com/cheese_plates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        cheese_id: cheeseFlavor.id,
        plate_id: plate.id,
      }),
    }).then((res) => res.json());
  }

  render() {
    return (
      <div>
        <Grid className="outer" celled container stackable columns={2}>
          <Grid.Row>
            <Grid.Column className="plates" width={6}>
              <PlateContainer
                plates={this.state.plates}
                cheeses={this.props.cheeses}
                drinks={this.state.selectedDrinks}
                mildCheese={this.state.mildCheese}
                mediumCheese={this.state.mediumCheese}
                boldCheese={this.state.boldCheese}
                bleuCheese={this.state.bleuCheese}
                clearSelections={this.clearSelections}
                saveButtonHandler={this.savePlate}
                suggestPlate={this.suggestPlate}
                flavorCardClick={this.flavorCardClick}
              />
            </Grid.Column>
            <Grid.Column className="Cheese Choices" stackable width={10}>
              <CheeseContainer
                cheeses={this.props.cheeses}
                clickHandler={(cheese) => this.addCheese(cheese)}
              />
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row>


                    <Grid.Column>
                        <SavedPlates 
                            plates={this.state.plates}
                                flavorCardClick={this.flavorCardClick}/>
                    </Grid.Column>
                </Grid.Row> */}
        </Grid>
      </div>
    );
  }
}

export default PlateSearch;

// ALTERNATE LOGIC maybe try this later
// findDrinkPairs = () => {
//     let mildDrinks = [];
//     let mediumDrinks = [];
//     if (this.state.mildCheese) {
//         mildDrinks.push(this.state.mildCheese.drinks)
//         console.log("mild", mildDrinks)
//     } if (this.state.mediumCheese) {
//         mediumDrinks.push(this.state.mediumCheese.drinks)
//         console.log("meds", mediumDrinks)
//     }

//     let allTheDrinks = mildDrinks.concat(mediumDrinks)
//     console.log("all now", allTheDrinks)
// }

//// ***********************************************

// find_duplicate_in_array = (allDrinks) => {
//     var object = {};
//     var result = [];

//     allDrinks.forEach(function (item) {
//         if (!object[item])
//             object[item] = 0;
//         object[item] += 1;
//     })

//     for (var prop in object) {
//         if (object[prop] >= 2) {
//             result.push(prop);
//         }
//     }
//     console.log("result", result)
//     return result;

// }
