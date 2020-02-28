import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react'
import CheeseList from '../containers/CheeseList';


class DrinkModal extends React.Component {

    noClick(){
        //I'm just killing the click so this doesn't break
    }

    render() {
        return (

            <Modal open={this.props.drinkView}
                onClick={this.props.handleClose}
                >
               
               
                <Modal.Header>
                    {this.props.drink.name}
                </Modal.Header>
                <Modal.Content image>
                    <Image src={this.props.drink.image} wrapped size='medium' />
                    <Modal.Description>
                        <Header>Pair with:</Header>
                        <CheeseList cheeses={this.props.cheeses} 
                            clickHandler={this.noClick}
                        />

                    </Modal.Description>
                </Modal.Content>

            </Modal>

        )
    };
}

export default DrinkModal;