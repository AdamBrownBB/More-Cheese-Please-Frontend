import React, { Component } from 'react';import { Grid } from 'semantic-ui-react'

import Mild from '../components/Mild';
import Medium from '../components/Medium';
import Bold from '../components/Bold';
import Bleu from '../components/Bleu';

class FlavorGrid extends Component {
 
    render() {
    return (
        <div>
            <Grid columns={2} relaxed padded >
                <Grid.Row>
                    <Grid.Column>
                        <h3>Mild</h3>
                        <Mild 
                            mildCheese={this.props.mildCheese}
                            clickHandler={this.props.flavorCardClick}/>
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Medium</h3>
                        <Medium mediumCheese={this.props.mediumCheese}
                                clickHandler={this.props.flavorCardClick} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <h3>Bold</h3>
                        <Bold boldCheese={this.props.boldCheese}
                              clickHandler={this.props.flavorCardClick} />
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Bleu</h3>
                        <Bleu bleuCheese={this.props.bleuCheese}
                            clickHandler={this.props.flavorCardClick}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    )};
}


export default FlavorGrid;