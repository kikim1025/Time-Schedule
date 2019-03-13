import React from 'react';
import { connect } from 'react-redux'
import actions from '../../src/redux/actions';

// This component will keep track of the login input for name, connecting name to redux store upon completeion
// State must be used to keep temporary track of name, which will only be sent to redux store once submitted 
// Otherwise incomplete input will
class ConnectLogin extends React.Component {
    state = {
        name: ''
    };

    getLoginInput = (event) => {
        event.preventDefault();
        this.setState({ name: event.target.value });
    };

    handleLogin = (event) => {
        event.preventDefault();
        this.props.addName({ name: this.state.name });
    };

    render() {
        return (
            <div>
                <div>Username:&nbsp;<input type='text' maxLength='15' placeholder='Your Name' onChange={this.getLoginInput} ></input></div>
                <button className='button--loginform' onClick={this.handleLogin}>Login</button>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addName: name => dispatch(actions.addName(name))
    };
}

const Login = connect(null, mapDispatchToProps) (ConnectLogin);

export default Login;