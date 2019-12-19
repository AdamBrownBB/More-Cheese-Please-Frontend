import React from 'react';
import DrinkCard from '../components/DrinkCard';


class DrinkList extends React.Component  {

    drinksRender = () => {

    
        
        //if there is a medium cheese in state
        // map over all the drinks
        // render only those that are paired
        
        
        if (!this.props.mediumCheese) {
            console.log("we have a medium")
        } 
    }   
        // else if
        //     (!this.state.mediumCheese && cheese.flavor === 'medium') {
        //     this.setState({ mediumCheese: cheese })
        // } else if
        //     (!this.state.boldCheese && cheese.flavor === 'bold') {
        //     this.setState({ boldCheese: cheese })
        // } else if
        //     (!this.state.bleuCheese && cheese.flavor === 'bleu') {
        //     this.setState({ bleuCheese: cheese })
        // }


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