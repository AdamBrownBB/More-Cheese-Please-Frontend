import React, { Component } from 'react';
import CheeseCard from './CheeseCard';

class Medium extends Component {

    renderCheeseCard() {
        if (this.props.mediumCheese) {
            return <CheeseCard key={this.props.mediumCheese.id}
                clickHandler={this.props.clickHandler}
                cheese={this.props.mediumCheese} />
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

export default Medium;