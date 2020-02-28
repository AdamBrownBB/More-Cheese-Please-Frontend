import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react'

class FGCheeseCard extends React.Component {
    render(props) {
        return (
           
            <Card>
                <Image src={this.props.cheese.image}  size='small' centered />
                <Card.Content>
                    <Header>{this.props.cheese.name}</Header>
                </Card.Content>
             </Card>
          

        )
    };
}

export default FGCheeseCard;