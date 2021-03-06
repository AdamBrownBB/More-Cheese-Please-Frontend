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
        selectedDrinks: [],
        currentDrinks: [],
        plates: []
    }

    componentDidMount() {
        this.fetchPlates()
    }

    fetchPlates = () => {
        fetch("http://localhost:3001/plates")
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    plates: data
                }))
    }

    // adds a cheese into each flavor in grid, also shows paired drinks by filtering down
    // filter only looks at last two associations, need to account for all
    // probably a good candidate for refactoring , 2x    
    addCheese = (cheese) => {
        if (cheese.flavor === 'mild') {
            this.setState({ mildCheese: cheese }, () => {
                if (this.state.selectedDrinks.length < 1) {
                    this.setState({ selectedDrinks: this.state.mildCheese.drinks })
                } else {
                    let drinkState = this.handleDrinks(this.state.mildCheese)
                    this.setState({ selectedDrinks: drinkState })
                }
            })
        } else if
            (cheese.flavor === 'medium') {
            this.setState({ mediumCheese: cheese }, () => {
                this.state.mediumCheese.drinks.forEach(drink => {
                    this.state.selectedDrinks.push(drink)
                    let currentSelections = this.pickDrinks(this.state.selectedDrinks)
                    this.setState({ currentDrinks: currentSelections })
                    console.log("CurrentSelction now", this.state.selectedDrinks)
                })
                // this.setState({ selectedDrinks: [...this.state.selectedDrinks, this.state.mediumCheese.drinks] })
                // console.log("drinks", this.state.selectedDrinks)

                // if (this.state.selectedDrinks.length < 1) { 
                //     this.setState({ selectedDrinks: this.state.mediumCheese.drinks })
                // } else {
                //     let drinkState = this.handleDrinks(this.state.mediumCheese)
                //     this.setState({ selectedDrinks: drinkState })
                // }
            })
        } else if
            (cheese.flavor === 'bold') {
            this.setState({ boldCheese: cheese }, () => {
                // if (this.state.selectedDrinks.length < 1) {
                //     this.setState({ selectedDrinks: this.state.boldCheese.drinks })
                // } else {
                this.state.boldCheese.drinks.forEach(drink => {
                    this.state.selectedDrinks.push(drink)
                    console.log("SD now", this.state.selectedDrinks)
                })
                // }
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
            if (cheese.drinks.find(cheesedrink => cheesedrink.id === drink.id)) {
                finalDrinks.push(drink);
            }
        })
        return finalDrinks
    }

    pickDrinks = (allDrinks) => {
        console.log("all drinks", allDrinks)
        this.props.drinks.filter(drink => allDrinks.includes(drink))
    }

    flavorCardClick = () => {
        //   console.log("hi") this just prevents it from breaking til I figure out what to do with this click
    }


    clearSelections = () => {
        this.setState({ mildCheese: null, mediumCheese: null, boldCheese: null, bleuCheese: null, saveCheeses: null, selectedDrinks: [] })
    }

    addPlate = (newPlate) => {
        this.setState({
            plates: [...this.state.plates, newPlate]
        })
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
                name: "test"
            })
        })
            .then(res => res.json())
            .then(plate => {
                this.cheeseFlavorsFetch(plate, this.state.mildCheese)
                this.cheeseFlavorsFetch(plate, this.state.mediumCheese)
                this.cheeseFlavorsFetch(plate, this.state.boldCheese)
                this.cheeseFlavorsFetch(plate, this.state.bleuCheese)
                this.addPlate(plate)
                this.clearSelections()
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
        // .then(cheesePlate => {  
        //     let newplate = [];
        //     console.log("this cheese_plate", cheesePlate)
        //     newPlate.push(cheesePlate)
        // })
    }


    render() {
        return (
            <div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <CheeseContainer
                                cheeses={this.props.cheeses}
                                clickHandler={(cheese) => this.addCheese(cheese)} />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <PlateContainer
                                plates={this.state.plates}
                                cheeses={this.props.cheeses}
                                drinks={this.state.currentDrinks}

                                mildCheese={this.state.mildCheese}
                                mediumCheese={this.state.mediumCheese}
                                boldCheese={this.state.boldCheese}
                                bleuCheese={this.state.bleuCheese}

                                clearSelections={this.clearSelections}
                                saveButtonHandler={this.savePlate}
                                flavorCardClick={this.flavorCardClick} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>


                        <Grid.Column>
                            <SavedPlates
                                plates={this.state.plates} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    };
} //end of TestPlateSearch 

export default PlateSearch;


