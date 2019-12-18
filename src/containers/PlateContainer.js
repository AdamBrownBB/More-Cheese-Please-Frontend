import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import SavedPlates from './SavedPlates';

class PlateContainer extends Component {

//clear button will reset state of Flavors to null
    render() {
     return (   
     <div>
            <h1>Plate Container</h1>
           
             <FlavorGrid 
                mildCheese={this.props.mildCheese}
                mediumCheese={this.props.mediumCheese}
                boldCheese={this.props.boldCheese}
                bleuCheese={this.props.bleuCheese}
                />

            <Button>Suggest Plate</Button>
            
             <Button onClick={() => {
                 this.props.clickHandler()}}>Clear</Button>
            <Button>Save</Button>
            <Button>Share</Button>                    

            <SavedPlates/>
        </div>)
    }
} //end PlateContainer

export default PlateContainer;