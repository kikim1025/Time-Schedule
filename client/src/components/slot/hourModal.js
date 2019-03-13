import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HourModal extends React.Component {
    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({ dropdownVal: 'Choose Receiver', dropdownValId: '', title: '', body: '', alert: '', alertModal: '', modal: !this.state.modal });
    }

    getInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    

    render() {
        return (
            <div id='button-container--post-message'> 
                <button id='button--modal' onClick={this.toggleModal}>Post a Sticky Message</button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>A New Sticky Message</ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' >Submit Appointment</Button>
                        <Button color='danger' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default HourModal;