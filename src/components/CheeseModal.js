import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react'


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
                        <Header>{this.props.cheese.name}</Header>
                        <p>We've found the following gravatar       image associated with your e-mail
                                    address.</p>
                                <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
            </Modal>

        )
    };
}

export default CheeseModal;