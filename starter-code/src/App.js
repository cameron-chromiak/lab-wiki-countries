import React, { Component } from 'react';
import './App.css';
import Countries from './components/CountryDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Countries/>
      </div>
    );
  }
}

export default App;
