import React, { Component } from 'react';
import ConsentForm from './ConsentForm';
import Stepper from './Stepper';


import './App.css';

class App extends Component {
  state = {

  };

  constructor() {
    super();

    this.state = {
      consent: null,
    };
  }


  render() {
    const { consent, currentPhrase } = this.state;

    return (
      <div className="App">
        <ConsentForm open={!consent} onAgree={() => this.setState({ consent: true })} />
        <Stepper />
      </div>
    );
  }
}

export default App;
