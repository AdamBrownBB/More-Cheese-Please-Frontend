import React, { Component } from 'react';
import CheeseCard from './CheeseCard';

class Bold extends Component {

    renderCheeseCard() {
        if (this.props.boldCheese) {
            return <CheeseCard key={this.props.boldCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.boldCheese} />
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

export default Bold;