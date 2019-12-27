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
                <h3>These Drinks Pair with Your Plate</h3>
            {this.renderDrinkCards()}
            </div>
        )
    };
}

export default DrinkList;