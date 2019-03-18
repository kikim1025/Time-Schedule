import React from 'react';
import { connect } from 'react-redux';
import { addName } from '../../src/redux/actions';
import './Login.css';

class ConnectLogin extends React.Component {

    // local state to keep track of name until submission to redux store
    state = {
        name: ''
    };

    getLoginInput = (event) => {
        this.setState({ name: event.target.value });
    };

    handleLogin = () => {
        this.props.addName(this.state.name);
    };

    render() {
        return (
            <div id='login-page'>
                <div id='login-message'>Welcome to the Appointment Scheduler, Please Enter Your Name to Continue</div>
                <button id='login-button' onClick={this.handleLogin}>Login</button>
                <input id='login-input' type='text' maxLength='15' placeholder='Name' onChange={this.getLoginInput} ></input>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addName: name => dispatch(addName(name))
    };
};

const Login = connect(null, mapDispatchToProps) (ConnectLogin);

export default Login;