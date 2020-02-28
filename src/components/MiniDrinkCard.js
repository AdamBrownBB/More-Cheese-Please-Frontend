import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class MiniDrinkCard extends React.Component {
    render() {
        return (
        


                <Card
                    onClick={() => {
                        this.props.clickHandler(this.props.drink)
                    }}>

                        <Image src={this.props.drink.image}  ui={true} size='mini' floated='left'/>
                    <Card.Content>
                        {/* <Card.Header ></Card.Header> */}

                        <Card.Description>
                        <h4>{this.props.drink.name}</h4>
                        </Card.Description>
                    </Card.Content>
                </Card>
           

        )
    };
}

export default MiniDrinkCard;