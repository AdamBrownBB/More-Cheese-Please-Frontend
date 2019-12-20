import React, { Component } from 'react';
import PlateFlavorGrid from './PlateFlavorGrid';

class PlateCard extends Component {

    render() {
        return (
            <div>
                <PlateFlavorGrid
                    mildCheese={this.props.plate.cheeses[0]}
                    mediumCheese={this.props.plate.cheeses[1]}
                    boldCheese={this.props.plate.cheeses[2]}
                    bleuCheese={this.props.plate.cheeses[3]}

                    flavorCardClick={this.props.flavorCardClick}
                />

            </div>)
    }
} //end PlateCard

export default PlateCard;