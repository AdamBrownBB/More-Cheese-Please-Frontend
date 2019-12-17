import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import SavedPlates from './SavedPlates';

class PlateContainer extends Component {
    render() {
     return (   
     <div>
            <h1>Plate Container</h1>
           
            <FlavorGrid />

            <Button>Suggest Plate</Button>
            <Button>Clear</Button>
            <Button>Save</Button>
            <Button>Share</Button>                    

            <SavedPlates/>
        </div>)
    }
} //end PlateContainer

export default PlateContainer;