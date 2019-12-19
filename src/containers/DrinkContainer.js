import React from 'react';
import DrinkCard from '../components/DrinkCard';


class DrinkContainer extends React.Component  {

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
                <p>Drinks</p>
            {this.renderDrinkCards()}
            </div>
        )
    };
}

export default DrinkContainer;