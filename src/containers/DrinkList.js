import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkModal from '../components/DrinkModal';


class DrinkList extends React.Component  {

    state = {
        drinkView: false,
        activeDrink: null
    }
  
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


        this.setState({
            drinkView: !this.state.drinkView,
            activeDrink: drink
        })
    }

    render() {
        return (
            <div>
                {this.state.drinkView && 
                    <DrinkModal
                        drink={this.state.activeDrink}
                        drinkView={this.state.drinkView}
                        handleClose={() => {
                            this.setState({ drinkView: false })
                        }}
                        cheeses={this.state.activeDrink.cheeses}
                    />
                }
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

export default DrinkList;


// Not in use, but will render ALL drinks
// renderDrinkCards() {
//     return this.props.drinks.map(drink => {
//         return <DrinkCard
//             key={drink.id}
//             drink={drink}
//         />
//     })
// }  