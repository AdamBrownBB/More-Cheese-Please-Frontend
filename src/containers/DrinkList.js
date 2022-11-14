import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkModal from '../components/DrinkModal';
import { Grid } from 'semantic-ui-react'



class DrinkList extends React.Component  {

    state = {
        drinkView: false,
        activeDrink: null
    }
  
    filterDrinks = () => {
        const sortedDrinks = {
            beers: [],
            reds: [],
            whites: []
        }
        
        this.props.drinks.forEach(drink => {
            if (drink.variety === "beer") {
              sortedDrinks.beers.push(drink);
            } else if (drink.variety === "white") {
              sortedDrinks.whites.push(drink);
            } else if (drink.variety === "red") {
              sortedDrinks.reds.push(drink);
            }
        })
        return sortedDrinks
    }
    
    renderDrinks(drinks) {
        return drinks.map(drink => {
            return <DrinkCard
                key={drink.id}
                clickHandler={this.toggleModal}
                drink={drink}
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
                            {this.renderDrinks(this.filterDrinks().beers)}
                        </Grid.Column>
                   
                 
                        <Grid.Column width={5}>
                            <h3>Reds</h3>
                            {this.renderDrinks(this.filterDrinks().reds)}
                        </Grid.Column>
                   
                 
                        <Grid.Column width={5}>
                            <h3>Whites</h3>
                            {this.renderDrinks(this.filterDrinks().whites)}
                        </Grid.Column>
                   
                </Grid>    
        </div>
                
                
  
        )
    };
} //end of class

export default DrinkList;
