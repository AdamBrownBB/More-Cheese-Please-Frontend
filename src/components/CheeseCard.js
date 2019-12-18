import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class CheeseCard extends React.Component {
    render() {
    return (
        
        <Card onClick={() => {
            this.props.clickHandler(this.props.cheese)
        }} >
                <Image src={this.props.cheese.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>TBC, check classname specs</span>
                    </Card.Meta>
                    <Card.Description>
                        About this chz
                    </Card.Description>
                </Card.Content>
            </Card>

      
    )};
}

export default CheeseCard;