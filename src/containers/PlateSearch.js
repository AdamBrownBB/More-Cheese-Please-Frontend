import React from 'react';
import { Grid } from 'semantic-ui-react'

import PlateContainer from './PlateContainer';
import SavedPlates from './SavedPlates';
import CheeseContainer from './CheeseContainer';

class PlateSearch extends React.Component {

    state = {
        flavor: "all",
        mildCheese: null,
        mediumCheese: null,
        boldCheese: null,
        bleuCheese: null,
        selectedDrinks: []
    }

    addCheese = (cheese) => {
        if (cheese.flavor === 'mild') {
            this.setState({ mildCheese: cheese }, () => {
                if (this.state.selectedDrinks.length < 1) {
                    this.setState({ selectedDrinks: this.state.mildCheese.drinks })
                } else {
                    let drinkState = this.handleDrinks(this.state.mildCheese)
                    this.setState({selectedDrinks: drinkState})
                }
            })
        } else if 
            (cheese.flavor === 'medium') {
            this.setState({ mediumCheese: cheese }, () => {
                if (this.state.selectedDrinks.length < 1) { 
                    this.setState({ selectedDrinks: this.state.mediumCheese.drinks })
                } else {
                    let drinkState = this.handleDrinks(this.state.mediumCheese)
                    this.setState({ selectedDrinks: drinkState })
                }
            })
        } else if
            (cheese.flavor === 'bold') {
            this.setState({ boldCheese: cheese }, () => {
                if (this.state.selectedDrinks.length < 1) {
                    this.setState({ selectedDrinks: this.state.boldCheese.drinks })
                } else {
                    let drinkState = this.handleDrinks(this.state.boldCheese)
                    this.setState({ selectedDrinks: drinkState })
                }
            })
        } else if
            (cheese.flavor === 'bleu') {
            this.setState({ bleuCheese: cheese }, () => {
                if (this.state.selectedDrinks.length < 1) {
                    this.setState({ selectedDrinks: this.state.bleuCheese.drinks })
                } else {
                    let drinkState = this.handleDrinks(this.state.bleuCheese)
                    this.setState({ selectedDrinks: drinkState })
                }
            })
        }
    }    

    handleDrinks = (cheese) => {
        console.log("second cheese selected drinks", cheese.drinks)
        console.log("previous selected", this.state.selectedDrinks)
        
        let finalDrinks = [];
        this.state.selectedDrinks.forEach(drink => {
            // console.log(drink)
            if (cheese.drinks.find(cheesedrink => cheesedrink.id === drink.id)) {
                finalDrinks.push(drink);
            }
            console.log("final drinks", finalDrinks)
                     
        });
        return finalDrinks
    }

    flavorCardClick = () => {
    //   console.log("hi")
    }


    clearPlate = () => {
        this.setState({ mildCheese: null, mediumCheese: null, boldCheese: null, bleuCheese: null, saveCheeses: null, selectedDrinks: []})
    }

    savePlate = (e) => {
        // e.preventDefault()

        fetch("http://localhost:3001/plates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({
                name: "ftest"
            })
        })
            .then(res => res.json())
            .then(plate => {
                console.log("chex", this.state.mediumCheese.id)
                this.cheeseFlavorsFetch(plate, this.state.mildCheese)
                this.cheeseFlavorsFetch(plate, this.state.mediumCheese)
                this.cheeseFlavorsFetch(plate, this.state.boldCheese)
                this.cheeseFlavorsFetch(plate, this.state.bleuCheese)
                this.clearPlate()
            })
    }

    cheeseFlavorsFetch(plate, cheeseFlavor) {
        fetch("http://localhost:3001/cheese_plates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
                        },
            body: JSON.stringify({
                cheese_id: cheeseFlavor.id,
                plate_id: plate.id
                })
        })
        .then(res => res.json())
        .then(cheesePlate => {
            console.log(cheesePlate)
        })
    }

    render() {
        return ( 
        <div>
            <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column>
                        <PlateContainer 
                            plates={this.props.plates}
                            cheeses={this.props.cheeses}
                            drinks={this.state.selectedDrinks}

                            mildCheese={this.state.mildCheese}
                            mediumCheese={this.state.mediumCheese}
                            boldCheese={this.state.boldCheese}
                            bleuCheese={this.state.bleuCheese}

                            clearPlate={this.clearPlate}
                            saveButtonHandler={this.savePlate}
                            flavorCardClick={this.flavorCardClick}/>
                    </Grid.Column>

                    <Grid.Column>
                        <CheeseContainer 
                            cheeses={this.props.cheeses}
                            clickHandler={ (cheese) => this.addCheese(cheese) }/>
                    </Grid.Column>

                    <Grid.Column>
                        <SavedPlates 
                            plates={this.props.plates}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )};
}

export default PlateSearch;


