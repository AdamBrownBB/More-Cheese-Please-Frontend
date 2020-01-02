import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class DrinkCard extends React.Component {
    render() {
        return (
            <Card.Group itemsPerRow={2}>
               
          
            <Card 
                onClick={() => {
                 this.props.clickHandler(this.props.drink)
                }}>
                    
                <Image src={this.props.drink.image} wrapped size='small' />
                <Card.Content>
                    <Card.Header>{this.props.drink.name}</Card.Header>
    
                    <Card.Description>
                    
                    </Card.Description>
                </Card.Content>
            </Card>
            </Card.Group>

        )
    };
}

export default DrinkCard;