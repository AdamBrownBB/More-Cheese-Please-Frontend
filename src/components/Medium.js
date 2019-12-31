import React, { Component } from 'react';
import CheeseCard from './CheeseCard';
import { Card, Image } from 'semantic-ui-react'

class Medium extends Component {

    renderCheeseCard() {
        if (this.props.mediumCheese) {
            return <CheeseCard key={this.props.mediumCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.mediumCheese} />
        } else {
            return <Card >
                    <Image src="https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png" wrapped ui={false} />
                      <Card.Content>
                         <Card.Header>Add a Medium Cheese</Card.Header>
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

export default Medium;