import React, { Component } from 'react'; import { Grid } from 'semantic-ui-react'

import Mild from '../components/Mild';
import Medium from '../components/Medium';
import Bold from '../components/Bold';
import Bleu from '../components/Bleu';

class PlateFlavorGrid extends Component {

    render() {
        return (
            <div>
                <Grid columns={2} >
                    <Grid.Row>
                        <Grid.Column>
                            <p>Mild</p>
                            <Mild
                                mildCheese={this.props.mildCheese}
                                clickHandler={this.props.flavorCardClick} />
                        </Grid.Column>

                        <Grid.Column>
                            <p>Medium</p>
                            <Medium mediumCheese={this.props.mediumCheese} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <p>Bold</p>
                            <Bold boldCheese={this.props.boldCheese} />
                        </Grid.Column>

                        <Grid.Column>
                            <p>Bleu</p>
                            <Bleu bleuCheese={this.props.bleuCheese} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        )
    };
}


export default PlateFlavorGrid;