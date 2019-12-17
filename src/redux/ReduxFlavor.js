import React from 'react';
import { Grid } from 'semantic-ui-react'

import Flavor from '../components/Flavor';
import { connect } from 'react-redux'


const FlavorGrid = (props) => {
    const { cheeses } = props
    const testFunc = cheeseArr => {
        return cheeseArr.map(cheese => {
            return <Flavor key={cheese.id} cheese={cheese} />
        })
    }

    const mildCheeses = cheeses.filter(cheese => cheese.flavor === "mild")
    return (
        <div>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>

                        {testFunc(mildCheeses)}
                    </Grid.Column>

                    <Grid.Column>
                        {/* testFunc(medCheeses) */}
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


const msp = state => {
    return { cheeses: state.cheeses }
}


export default connect(msp)(FlavorGrid);