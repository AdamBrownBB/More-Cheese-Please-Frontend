import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import DrinkList from './DrinkList';

class PlateContainer extends Component {

    render() {
     return (   
        <div>
            <h1>My Cheese Plate</h1>
           
             <FlavorGrid 
                mildCheese={this.props.mildCheese}
                mediumCheese={this.props.mediumCheese}
                boldCheese={this.props.boldCheese}
                bleuCheese={this.props.bleuCheese}
                flavorCardClick={this.props.flavorCardClick}
                />

             <Button onClick={() => { this.props.suggestPlate() }}>Suggest Plate</Button>
            
             <Button onClick={() => {this.props.clearSelections()}} >Clear</Button>
             <Button onClick={() => {this.props.saveButtonHandler()}}>Save</Button>
            {/* <Button>Share</Button>                     */}

            <h3> These Drinks Pair with Your Plate</h3>
            <DrinkList
                 drinks={this.props.drinks}
              />
        </div>)
    }
} //end PlateContainer

export default PlateContainer;