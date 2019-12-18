import React, { Component } from 'react';import { Grid } from 'semantic-ui-react'

import Mild from '../components/Mild';
import Medium from '../components/Medium';
import Bold from '../components/Bold';
import Bleu from '../components/Bleu';

class FlavorGrid extends Component {
 
    render() {
    return (
        <div>
            <Grid columns={2} >
                <Grid.Row>
                    <Grid.Column>
                        <Mild mildCheese={this.props.mildCheese}/>
                    </Grid.Column>

                    <Grid.Column>
                        <Medium mediumCheese={this.props.mediumCheese} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Bold boldCheese={this.props.boldCheese} />
                    </Grid.Column>

                    <Grid.Column>
                        <Bleu bleuCheese={this.props.bleuCheese}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    )};
}


export default FlavorGrid;