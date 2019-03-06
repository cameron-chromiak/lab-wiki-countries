import React, { Component } from 'react';
import './App.css';
import Countries from './components/CountryDetails'
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={ountries} />
        <Route exact path="/projects/:id" component={countries} />
      </Switch>
    );
  }
}

export default App;
