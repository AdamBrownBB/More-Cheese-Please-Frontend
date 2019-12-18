import React, { Component } from 'react';
import CheeseCard from './CheeseCard';

import { Card, Image } from 'semantic-ui-react'


class Mild extends Component {
    
    renderCheeseCard() {
        if (this.props.mildCheese) {
            return <CheeseCard key={this.props.mildCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.mildCheese} />
        } else {
            return null
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