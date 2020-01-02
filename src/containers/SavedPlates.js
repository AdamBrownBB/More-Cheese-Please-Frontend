import React from 'react';
import PlateCard from './PlateCard';
import { Card } from 'semantic-ui-react';


class SavedPlates extends React.Component {



    renderPlateCards() {
        return this.props.plates.map(plate => {
            return <PlateCard
                key={plate.id}
                plate={plate}
                flavorCardClick={this.props.flavorCardClick}
            />
        })
    }    

    render() {
        return (
            <div>
                <h1>My Saved Plates</h1>
                <Card.Group itemsPerRow={3}>
                {this.renderPlateCards()}
                </Card.Group>
            </div>
        )
    };

}


export default SavedPlates;