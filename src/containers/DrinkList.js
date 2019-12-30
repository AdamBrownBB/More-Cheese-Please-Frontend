import React from 'react';
import DrinkCard from '../components/DrinkCard';


class DrinkList extends React.Component  {

    
    filterBeers = () => {
        let beers = [];
        this.props.drinks.forEach(drink => {
            if (drink.variety === 'beer') {
                beers.push(drink);
            }
        })
        return beers
    }
    
    renderBeers(beers) {
        return beers.map(drink => {
            return <DrinkCard
                key={drink.id}
                drink={drink}
            />
        })
    }   

    filterReds = () => {
        let reds = [];
        this.props.drinks.forEach(drink => {
            if (drink.variety === 'red') {
                reds.push(drink);
            }
        })
        return reds
    }

    renderReds(reds) {
        return reds.map(drink => {
            return <DrinkCard
                key={drink.id}
                drink={drink}
            />
        })
    }   

    filterWhites = () => {
        let whites = [];
        this.props.drinks.forEach(drink => {
            if (drink.variety === 'white') {
                whites.push(drink);
            }
        })
        return whites
    }

    renderWhites(whites) {
        return whites.map(drink => {
            return <DrinkCard
                key={drink.id}
                drink={drink}
            />
        })
    }   







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
                <h4>Beers</h4>
                {this.renderBeers(this.filterBeers())}
                <h4>Reds</h4>
                {this.renderReds(this.filterReds())}
                <h4>Whites</h4>
                {this.renderWhites(this.filterWhites())}
                
            </div>
        )
    };
}

export default DrinkList;