import React from 'react';
import { connect } from 'react-redux'
import Login from './components/Login';
import Schedule from './components/Schedule';
import './App.css';

class ConnectApp extends React.Component {
  
  render() {
    return ( 
      <div id='page'>
        { this.props.name // access name from store, then conditionally render
          ? <Schedule />
          : <Login />
        }
      </div>
    );
  };
};

// access redux store
const mapStateToProps = (state) => {
    return { name: state.name };
};

// connect to redux
const App = connect(mapStateToProps) (ConnectApp);

export default App;