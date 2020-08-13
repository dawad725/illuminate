import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import BulbForm from './components/form';
import Results from './components/results'
import BrandDetails from './components/brand-details';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={BulbForm} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/results/brand-details' component={BrandDetails} />
        </ Switch>
      </div>
    );
  }
}

export default App;

