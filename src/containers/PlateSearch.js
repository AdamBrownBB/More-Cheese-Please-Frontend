import React from 'react';
import { Grid } from 'semantic-ui-react'

import PlateContainer from './PlateContainer';
import DrinkContainer from './DrinkContainer';
import CheeseContainer from './CheeseContainer';

class PlateSearch extends React.Component {

    state = {
        flavor: "all",
        mildCheese: null,
        mediumCheese: null,
        boldCheese: null,
        bleuCheese: null,
        // saveCheeses: [],
        
    }

        addCheese = (cheese) => {
            // this.setState({ saveCheeses: [...this.state.saveCheeses, cheese] })   
        if (!this.state.mildCheese && cheese.flavor === 'mild') {
            this.setState({ mildCheese: cheese})
        } else if
            (!this.state.mediumCheese && cheese.flavor === 'medium') {
            this.setState({ mediumCheese: cheese })
        } else if
            (!this.state.boldCheese && cheese.flavor === 'bold') {
            this.setState({ boldCheese: cheese })
        } else if
            (!this.state.bleuCheese && cheese.flavor === 'bleu') {
            this.setState({ bleuCheese: cheese })
        }
    }    

              

 

    clearPlate = () => {
        this.setState({ mildCheese: null, mediumCheese: null, boldCheese: null, bleuCheese: null, saveCheeses: null})
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
                this.cheeseFlavorsFetch(plate, this.state.mildCheese)
                this.cheeseFlavorsFetch(plate, this.state.mediumCheese)
                this.cheeseFlavorsFetch(plate, this.state.boldCheese)
                this.cheeseFlavorsFetch(plate, this.state.bleuCheese)
            })
        }

    cheeseFlavorsFetch(plate, cheeseFlavor) {fetch("http://localhost:3001/cheese_plates", {
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
    })}

    render() {
        return (
        
        <div>
            <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column>
                        <PlateContainer 
                            plates={this.props.plates}
                            cheeses={this.props.cheeses}
                            drinks={this.props.drinks}
                            mildCheese={this.state.mildCheese}
                            mediumCheese={this.state.mediumCheese}
                            boldCheese={this.state.boldCheese}
                            bleuCheese={this.state.bleuCheese}
                            clickHandler={this.clearPlate}
                            saveButtonHandler={this.savePlate}/>
                    </Grid.Column>

                    <Grid.Column>
                        <CheeseContainer 
                            cheeses={this.props.cheeses}
                            clickHandler={ ( (cheese ) => this.addCheese(cheese, cheese.flavor))}/>
                    </Grid.Column>

                    <Grid.Column>
                        <DrinkContainer 
                            drinks={this.props.drinks}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )};
}

export default PlateSearch;


    // addCheese = (cheese, flavor) => {
    //     console.log("iam chz", cheese, "i am flavor", flavor)

    //     this.setState(
    //         { 
    //             saveCheeses: [...this.state.saveCheeses, cheese]
    //         }, () => this.setState({
    //             mildCheese: this.state.saveCheeses.filter(cheeses => cheeses.flavor === "mild")
    //          })
    //         )

    // }   

        // state = {
    //     flavor: "all",
    //     mildCheese: null,
    //     medium: null,
    //     bold: null,
    //     bleu: null,
    //     saveCheeses: []
    // }
