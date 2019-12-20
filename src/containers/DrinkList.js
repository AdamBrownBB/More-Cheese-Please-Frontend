import React from 'react';
import DrinkCard from '../components/DrinkCard';


class DrinkList extends React.Component  {

    renderDrinkCards() {
        return this.props.drinks.map(drink => {
            return <DrinkCard
                key={drink.id}
                drink={drink}
            />
        })
    }    
    render() {
        return (
            <div>
                <h1>Drinks</h1>
            {this.renderDrinkCards()}
            </div>
        )
    };
}

export default DrinkList;