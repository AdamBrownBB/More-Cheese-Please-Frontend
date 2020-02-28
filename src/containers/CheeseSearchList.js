import React from 'react';
import CheeseCard from '../components/CheeseCard';
import CheeseModal from '../components/CheeseModal';
import CheeseDropDown from '../components/CheeseDropDown';
import { Card, Grid, Divider } from 'semantic-ui-react'


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
                <Grid >
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
                <Grid.Row>
                    <Grid.Column>
                        <h1>Pick a Cheese</h1>
                        <p>Choose any cheese to see what drinks pair well with it</p>
                        <CheeseDropDown changeFlavor={this.props.changeFlavor} />
                        <Divider hidden></Divider>

                        <Card.Group itemsPerRow={6}>
                            {this.renderCheeseCards()}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        )
    }

} //end CheeseSearchList

export default CheeseSearchList;