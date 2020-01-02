import React from 'react';
import MiniDrinkCard from '../components/MiniDrinkCard';
import { Card, Image } from 'semantic-ui-react'


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
            return <MiniDrinkCard
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
            return <MiniDrinkCard
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
            return <MiniDrinkCard
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
                    <Card.Group itemsPerRow={3}>
                     {this.renderBeers(this.filterBeers())}
                    </Card.Group>
                <h4>Reds</h4>
                    <Card.Group itemsPerRow={3}>
                      {this.renderReds(this.filterReds())}
                    </Card.Group>
                <h4>Whites</h4>
                    <Card.Group itemsPerRow={3}>
                       {this.renderWhites(this.filterWhites())}
                    </Card.Group>
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