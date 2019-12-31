import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react'
import DrinkList from '../containers/DrinkList';


class CheeseModal extends React.Component {
    render() {
        return (
            <Modal open={this.props.cheeseView}
                onClick={this.props.handleClose}>
                <Modal.Header>
                    {this.props.cheese.name}
                </Modal.Header>
                <Modal.Content image>
                    <Image src={this.props.cheese.image} wrapped        size='medium' />
                    <Modal.Description>
                        <Header>Pair with:</Header>
                        <DrinkList drinks={this.props.drinks} />
                                
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        )
    };
}

export default CheeseModal;