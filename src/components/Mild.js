import React, { Component } from 'react';
import FGCheeseCard from './FGCheeseCard';
import { Card, Image } from 'semantic-ui-react'


class Mild extends Component {



    renderCheeseCard() {
        if (this.props.mildCheese) {
            return <FGCheeseCard 
            key={this.props.mildCheese.id}
                cheese={this.props.mildCheese}
                clickHandler={this.props.clickHandler} />
        } else {
            return <Card >
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

export default Mild;