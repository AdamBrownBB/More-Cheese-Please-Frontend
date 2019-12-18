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
        bleuCheese: null
    }

    addCheese = (cheese) => {
        console.log(cheese)

        if (!this.state.mildCheese && cheese.flavor === 'mild') {
            this.setState({ mildCheese: cheese })
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

    render() {
        return (
        
        <div>
            <Grid columns={3} >
                <Grid.Row>
                    <Grid.Column>
                        <PlateContainer 
                            plates={this.props.plates}
                            cheeses={this.props.cheeses}/>
                    </Grid.Column>

                    <Grid.Column>
                        <CheeseContainer 
                            cheeses={this.props.cheeses}
                            clickHandler={this.addCheese}/>
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
