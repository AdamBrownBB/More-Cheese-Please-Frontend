import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkModal from '../components/DrinkModal';
import { Grid, Header } from 'semantic-ui-react'



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
    
    renderDrinks(drink) {
        return drink.map(drink => {
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

    filterWhites = () => {
        let whites = [];
        this.props.drinks.forEach(drink => {
            if (drink.variety === 'white') {
                whites.push(drink);
            }
        })
        return whites
    }

  
    toggleModal = (drink) => {
        this.setState({
            drinkView: !this.state.drinkView,
            activeDrink: drink
        })
    }

    render() {
        return (
            <div className="card-container">
            
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
               
                <Grid celled>
                        <Grid.Column width={5}>
                            <h3>Beers</h3>
                            {this.renderDrinks(this.filterBeers())}
                        </Grid.Column>
                   
                 
                        <Grid.Column width={5}>
                            <h3>Reds</h3>
                            {this.renderDrinks(this.filterReds())}
                        </Grid.Column>
                   
                 
                        <Grid.Column width={5}>
                            <h3>Whites</h3>
                            {this.renderDrinks(this.filterWhites())}
                        </Grid.Column>
                   
                </Grid>    
        </div>
                
                
  
        )
    };
} //end of class

export default DrinkList;
