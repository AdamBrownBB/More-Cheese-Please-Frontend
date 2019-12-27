import React, { Component } from 'react';
import CheeseCard from './CheeseCard';
import { Card, Image } from 'semantic-ui-react'


class Mild extends Component {

    renderCheeseCard() {
        if (this.props.mildCheese) {
            return <CheeseCard key={this.props.mildCheese.id}
                // clickHandler={this.props.clickHandler}
                cheese={this.props.mildCheese}
                clickHandler={this.props.clickHandler} />
        } else {
            return <Card >
                <Image src="https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png" wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Add a Mild Cheese</Card.Header>
                </Card.Content>
            </Card>    
        }
    }

    render() {
        return (
            <div>
              {this.renderCheeseCard()}
            </div>
        );
    }
}

export default Mild;