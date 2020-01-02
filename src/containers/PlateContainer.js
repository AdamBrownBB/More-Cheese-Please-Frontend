import React, { Component } from 'react';
import { Button, Grid, GridColumn } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import PlateDrinkList from './PlateDrinkList';

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
             <Grid fixed padded>
             <Button onClick={() => { this.props.suggestPlate() }}>Suggest Plate</Button>
                   

             <Button onClick={() => {this.props.clearSelections()}} >Clear</Button>
                  
             <Button onClick={() => {this.props.saveButtonHandler()}}>Save</Button>
                 
            {/* <Button>Share</Button>                     */}
             </Grid>
            <h3> These Drinks Pair with Your Plate</h3>
            <PlateDrinkList
                 drinks={this.props.drinks}
              />
        </div>)
    }
} //end PlateContainer

export default PlateContainer;