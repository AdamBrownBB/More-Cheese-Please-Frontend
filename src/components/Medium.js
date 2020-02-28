import React, { Component } from 'react';
import FGCheeseCard from './FGCheeseCard';
import { Card, Image } from 'semantic-ui-react'

class Medium extends Component {

    renderCheeseCard() {
        if (this.props.mediumCheese) {
            return <FGCheeseCard key={this.props.mediumCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.mediumCheese} />
        } else {
            return <Card >
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

export default Medium;