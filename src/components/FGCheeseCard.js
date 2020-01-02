import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class FGCheeseCard extends React.Component {
    render(props) {
        return (

            <Card>
                <Image src={this.props.cheese.image} wrapped ui={false} size='tiny' />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>
                </Card.Content>
            </Card>


        )
    };
}

export default FGCheeseCard;