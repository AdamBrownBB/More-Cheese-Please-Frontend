import React from 'react';
import CheeseCard from '../components/CheeseCard';
import CheeseModal from '../components/CheeseModal';


class CheeseSearchList extends React.Component {

    state = {
        cheeseView: false,
        activeCheese: null
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

    toggleModal = (cheese) => {
        this.setState({
            cheeseView: !this.state.cheeseView, 
            activeCheese: cheese
        })
    }

    render() {
        return (
            <div>
                {this.state.cheeseView &&
                   <CheeseModal
                    cheese={this.state.activeCheese}
                    cheeseView={this.state.cheeseView}
                    handleClose={ () => {
                            this.setState({ cheeseView: false })
                        }}
                    drinks={this.state.activeCheese.drinks}    
                   />
                }
                {this.renderCheeseCards()}
            </div>
        )
    }

} //end CheeseSearchList

export default CheeseSearchList;