import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class CheeseCard extends React.Component {
    render(props) {
    return (
    
        <Card onClick={() => {
            this.props.clickHandler(this.props.cheese)
        }} >
                <Image src={this.props.cheese.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>
                    <Card.Meta>
                    <span className='date'>hi {this.props.cheese.name}</span>
                    </Card.Meta>
                    <Card.Description>
                        About this chz
                    </Card.Description>
                </Card.Content>
            </Card>    

      
    )};
}

export default CheeseCard;