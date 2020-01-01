import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class FFCheeseCard extends React.Component {
    render(props) {
        return (

            <Card onClick={() => {
                this.props.clickHandler(this.props.cheese)
            }} >
                <Image src={this.props.cheese.image} wrapped={true} size='medium' />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>


                </Card.Content>
            </Card>


        )
    };
}

export default FFCheeseCard;