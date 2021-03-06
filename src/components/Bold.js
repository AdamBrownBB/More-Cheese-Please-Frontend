import React, { Component } from 'react';
import FGCheeseCard from './FGCheeseCard';
import { Card, Image } from 'semantic-ui-react'


class Bold extends Component {

    renderCheeseCard() {
        if (this.props.boldCheese) {
            return <FGCheeseCard key={this.props.boldCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.boldCheese} />
        } else {
            return  <Card >
                <Image src="https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png" centered size='small'  />
                     
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

export default Bold;