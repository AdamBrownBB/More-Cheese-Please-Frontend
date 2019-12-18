import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import SavedPlates from './SavedPlates';

class PlateContainer extends Component {

//clear button will reset state of Flavors to null


    addCheese = (cheese) => {
        console.log(cheese)

        if (!this.state.mildCheese && cheese.flavor === 'mild') {
            this.setState({ mildCheese: cheese })
        } else if
            (!this.state.mediumCheese && cheese.flavor === 'medium') {
            this.setState({ mediumCheese: cheese })
        } else if
            (!this.state.boldCheese && cheese.flavor === 'bold') {
            this.setState({ boldCheese: cheese })
        } else if
            (!this.state.bleuCheese && cheese.flavor === 'bleu') {
            this.setState({ bleuCheese: cheese })
        } 
    }


    render() {
     return (   
     <div>
            <h1>Plate Container</h1>
           
             <FlavorGrid 
                // mildCheese={this.state.mildCheese}
                // mediumCheese={this.state.mediumCheese}
                // boldCheese={this.state.boldCheese}
                // bleuCheese={this.state.bleuCheese}
                />

            <Button>Suggest Plate</Button>
            
            <Button>Clear </Button>
            <Button>Save</Button>
            <Button>Share</Button>                    

            <SavedPlates/>
        </div>)
    }
} //end PlateContainer

export default PlateContainer;