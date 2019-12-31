import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkModal from '../components/DrinkModal';


class PlateDrinkList extends React.Component {

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
                clickHandler={this.toggleModal}
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
                clickHandler={this.toggleModal}
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
                clickHandler={this.toggleModal}
            />
        })
    }

    toggleModal = (drink) => {
        console.log("click")
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
} //end of class

export default PlateDrinkList;


// Not in use, but will render ALL drinks
// renderDrinkCards() {
//     return this.props.drinks.map(drink => {
//         return <DrinkCard
//             key={drink.id}
//             drink={drink}
//         />
//     })
// }  