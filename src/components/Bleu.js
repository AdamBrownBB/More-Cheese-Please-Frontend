import React, { Component } from 'react';
import FGCheeseCard from './FGCheeseCard';
import { Card, Image } from 'semantic-ui-react'


class Bleu extends Component {

    renderCheeseCard() {
        if (this.props.bleuCheese) {
            return <FGCheeseCard key={this.props.bleuCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.bleuCheese} />
        } else {
            return  <Card >
                <Image src="https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png" centered size='small' />
                 
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

export default Bleu;