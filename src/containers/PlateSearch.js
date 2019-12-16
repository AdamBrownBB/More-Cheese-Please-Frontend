import React from 'react';
import { Grid } from 'semantic-ui-react'

import PlateContainer from './PlateContainer';
import DrinkContainer from './DrinkContainer';
import CheeseContainer from './CheeseContainer';

const PlateSearch = () => {
    return (
        <div>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <PlateContainer />
                    </Grid.Column>

                    <Grid.Column>
                        <CheeseContainer />
                    </Grid.Column>

                    <Grid.Column>
                        <DrinkContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default PlateSearch;
