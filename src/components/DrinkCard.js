import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class DrinkCard extends React.Component {
    render() {
        return (

            <Card >
                <Image src={this.props.drink.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.drink.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>hi {this.props.drink.name}</span>
                    </Card.Meta>
                    <Card.Description>
                        About this drink
                    </Card.Description>
                </Card.Content>
            </Card>


        )
    };
}

export default DrinkCard;