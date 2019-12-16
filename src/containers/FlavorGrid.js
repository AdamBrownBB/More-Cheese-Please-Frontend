import React from 'react';
import { Grid } from 'semantic-ui-react'

import Flavor from '../components/Flavor';


const FlavorGrid = () => {
    return (
        <div>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Flavor />
                    </Grid.Column>

                    <Grid.Column>
                        <Flavor />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Flavor />
                    </Grid.Column>

                    <Grid.Column>
                        <Flavor />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    );
}

export default FlavorGrid;