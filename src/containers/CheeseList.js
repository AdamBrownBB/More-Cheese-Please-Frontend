import React from 'react';
import CheeseCard from '../components/CheeseCard';
import { Card } from 'semantic-ui-react'

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
            <div >
                <Card.Group itemsPerRow={4}>
                {this.renderCheeseCards()}
                </Card.Group>
            </div>
        )
    }
    
} //end CheeseList

export default CheeseList;