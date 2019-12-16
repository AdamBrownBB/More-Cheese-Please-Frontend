import React from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import SavedPlates from './SavedPlates';


const PlateContainer = () => {
    return (
        <div>
            <h1>Plate Container</h1>
           
            <FlavorGrid />

            <Button>Suggest Plate</Button>
            <Button>Clear</Button>
            <Button>Save</Button>
            <Button>Share</Button>                    

            <SavedPlates/>
        </div>
    );
}

export default PlateContainer;