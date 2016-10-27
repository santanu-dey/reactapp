import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

// import Winterfell from winterfell;
var Winterfell = require('winterfell');
import schema from './schema'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Health Inc. Form</h2>
        </div>
        <p className="App-intro">
          Please submit your records
        </p>
      </div>
    );
  }
}

export class Form extends  Component {
  render(){
    return (
      <Winterfell schema={schema} />,
  document.getElementById('form')
  
   );
 }
}

export default App;

