import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { selectColor } from '../../redux/selectors'

class ConnectHour extends React.Component {
    state = {
        modal: false,
        day: this.props.day,
        hour: this.props.hour
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    sendAppointment = () => {
        
    }

    render() {
        return (
            <div className='hour'>
                <div id='button--modal' className={this.props.color} onClick={this.toggleModal}>{this.props.hour}</div>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{this.props.day} at {this.props.hour}</ModalHeader>
                    <ModalBody>Is this time correct?</ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.sendAppointment}>Submit Appointment</Button>
                        <Button color='danger' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        color: selectColor(state, ownProps)
    };
};

const Hour = connect(mapStateToProps) (ConnectHour);

export default Hour;