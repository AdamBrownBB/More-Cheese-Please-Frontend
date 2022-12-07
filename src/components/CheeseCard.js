import React from "react";
import { Card, Image } from "semantic-ui-react";
import {StyledHeader} from './styledComponents'

class CheeseCard extends React.Component {
  render(props) {
    return (
      <Card 
        onClick={() => {
          this.props.clickHandler(this.props.cheese);
        }}
      >
        <Image src={this.props.cheese.image} size="medium" />
        <Card.Content>
          <Card.Header>{this.props.cheese.name}</Card.Header>
          <StyledHeader>{this.props.cheese.name}</StyledHeader>

          <Card.Description>
            <b>Flavor:</b> {this.props.cheese.flavor}
          </Card.Description>
          {/* <Card.Description>
                    <b>Milk: </b> {this.props.cheese.milk} 
                </Card.Description> */}
        </Card.Content>
      </Card>
    );
  }
}

export default CheeseCard;
