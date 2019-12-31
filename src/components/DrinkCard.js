import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class DrinkCard extends React.Component {
    render() {
        return (

            <Card onClick={() => {
                this.props.clickHandler(this.props.drink)
            }}>
                <Image src={this.props.drink.image}  size='small' />
                <Card.Content>
                    <Card.Header>{this.props.drink.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.props.drink.variety}</span>
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