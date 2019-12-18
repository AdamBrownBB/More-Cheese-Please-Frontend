import React from 'react';
import { Grid } from 'semantic-ui-react'

import Mild from '../components/Mild';

const FlavorGrid = ()=> {
 
    return (
        <div>
            <Grid columns={2} >
                <Grid.Row>
                    <Grid.Column>
                        <Mild />
                    </Grid.Column>

                    <Grid.Column>
                        <Mild />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        
                    </Grid.Column>

                    <Grid.Column>
                      
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    );
}


export default FlavorGrid;