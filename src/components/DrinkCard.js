import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class DrinkCard extends React.Component {
    render() {
        return (
            <Card.Group itemsPerRow={1}>
               
          
            <Card 
                onClick={() => {
                 this.props.clickHandler(this.props.drink)
                }}>
                    
                <Image src={this.props.drink.image} 
                 
                size='medium' />
                <Card.Content>
                    <Card.Header textAlign='center' >{this.props.drink.name}</Card.Header>
    
                    <Card.Description>
                    
                    </Card.Description>
                </Card.Content>
            </Card>
            </Card.Group>

        )
    };
}

export default DrinkCard;