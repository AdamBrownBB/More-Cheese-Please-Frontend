import React, { Component} from 'react';
import DrinkList from './DrinkList';
import { Grid } from 'semantic-ui-react'


class DrinkSearch extends Component {
    
    render() {
    return (
        <div>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={10}>
                     <h1>Pick a Drink</h1>
                      <p>Choose a drink to see what cheeses pair well with it</p>
                    <DrinkList drinks={this.props.drinks}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>    
        </div>
    )};
}

export default DrinkSearch;