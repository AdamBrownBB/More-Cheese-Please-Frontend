import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class CheeseCard extends React.Component {
    render(props) {
    return (
       
        <Card onClick={() => {
            this.props.clickHandler(this.props.cheese)
        }} >
                <Image src={this.props.cheese.image} wrapped ui={false} size='small' />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>
                    
                    <Card.Description>
                    <b>Flavor: </b> {this.props.cheese.flavor} 
                    </Card.Description>
                {/* <Card.Description>
                    <b>Milk: </b> {this.props.cheese.milk} 
                </Card.Description> */}
                </Card.Content>
            </Card>    
    
      
    )};
}

export default CheeseCard;