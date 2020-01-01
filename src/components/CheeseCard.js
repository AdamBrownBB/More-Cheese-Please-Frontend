import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class CheeseCard extends React.Component {
    render(props) {
    return (
       
        <Card onClick={() => {
            this.props.clickHandler(this.props.cheese)
        }} >
                <Image src={this.props.cheese.image} wrapped={true} size='medium' />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>
                    
                    <Card.Description>
                        Flavor: {this.props.cheese.flavor} 
                    </Card.Description>
                <Card.Description>
                        Milk: {this.props.cheese.milk} 
                </Card.Description>
                </Card.Content>
            </Card>    
    
      
    )};
}

export default CheeseCard;