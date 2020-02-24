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
                            {this.renderBeers(this.filterBeers())}
                        </Grid.Column>
                   
                 
                        <Grid.Column width={5}>
                            <h3>Reds</h3>
                            {this.renderReds(this.filterReds())}
                        </Grid.Column>
                   
                 
                        <Grid.Column width={5}>
                            <h3>Whites</h3>
                            {this.renderWhites(this.filterWhites())}
                        </Grid.Column>
                   
                </Grid>    
        </div>
                
                
  
        )
    };
} //end of class

export default DrinkList;
