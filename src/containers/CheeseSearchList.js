import React from 'react';
import CheeseCard from '../components/CheeseCard';
import CheeseModal from '../components/CheeseModal';


class CheeseSearchList extends React.Component {

    state = {
        cheeseView: true
    }

    renderCheeseCards() {
        return this.props.cheeses.map(cheese => {
            return <CheeseCard
                key={cheese.id}
                clickHandler={this.toggleModal}
                cheese={cheese}
            />
        })
    }

    toggleModal = () => {
        this.setState({
            cheeseView: !this.state.cheeseView
        })
    }

    render() {
        return (
            <div>
                {this.state.cheeseView &&
                   <CheeseModal/>
                }
                {this.renderCheeseCards()}
            </div>
        )
    }

} //end CheeseSearchList

export default CheeseSearchList;