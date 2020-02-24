import React from 'react';
import DrinkList from './DrinkList';

class DrinkSearch extends React.Component {
    
    render() {
    return (
        <div>
            <h1>Pick a Drink</h1>
            <p>Choose a drink to see what cheeses pair well with it</p>
            <DrinkList
                drinks={this.props.drinks}/>
        </div>
    )};
}

export default DrinkSearch;