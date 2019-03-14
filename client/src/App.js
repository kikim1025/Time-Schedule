import React from 'react';
import { connect } from 'react-redux'
import Login from './components/login';
import Schedule from './components/schedule';
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

const mapStateToProps = (state) => {
    return { name: state.name };
};

const App = connect(mapStateToProps) (ConnectApp);

export default App;