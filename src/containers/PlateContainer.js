import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import DrinkList from './DrinkList';

class PlateContainer extends Component {

    render() {
     return (   
        <div>
            <h1>Plate Container</h1>
           
             <FlavorGrid 
                mildCheese={this.props.mildCheese}
                mediumCheese={this.props.mediumCheese}
                boldCheese={this.props.boldCheese}
                bleuCheese={this.props.bleuCheese}
                flavorCardClick={this.props.flavorCardClick}
                />

            <Button>Suggest Plate</Button>
            
             <Button onClick={() => {this.props.clearPlate()}} >Clear</Button>
             <Button onClick={() => {this.props.saveButtonHandler()}}>Save</Button>
            <Button>Share</Button>                    

            <DrinkList
                 drinks={this.props.drinks}
                 mildCheese={this.props.mildCheese}
                 mediumCheese={this.props.mediumCheese}
                 boldCheese={this.props.boldCheese}
                 bleuCheese={this.props.bleuCheese}/>
        </div>)
    }
} //end PlateContainer

export default PlateContainer;