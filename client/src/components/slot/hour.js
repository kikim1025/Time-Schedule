import React from 'react';
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { selectColor } from '../../redux/selectors'
import { sendAppointment } from '../../redux/actions'

class ConnectHour extends React.Component {
    state = {
        modal: false,
        day: this.props.day,
        hour: this.props.hour
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    sendAppointment = () => { // name is of global importance, so stored in redux store
        this.props.sendAppointment(this.props.name, this.state.day, this.state.hour);
        this.toggleModal();
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
        color: selectColor(state, ownProps),
        name: state.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendAppointment: (name, day, hour) => dispatch(sendAppointment(name, day, hour))
    };
};

const Hour = connect(mapStateToProps, mapDispatchToProps) (ConnectHour);

export default Hour;