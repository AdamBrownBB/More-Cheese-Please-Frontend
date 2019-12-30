import React from 'react';
import CheeseCard from '../components/CheeseCard';

class CheeseList extends React.Component {
    
    // state = {
    //     cheeseView: true
    // }

    renderCheeseCards() {
        return this.props.cheeses.map(cheese => {
            return <CheeseCard 
                key={cheese.id}
                clickHandler={this.props.clickHandler}
                cheese={cheese}
            />
        })
    }

    render() {
        return (
            <div>
                {this.renderCheeseCards()}
            </div>
        )
    }
    
} //end CheeseList

export default CheeseList;