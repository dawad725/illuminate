import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import BulbForm from './components/form';
import Results from './components/results'



class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '' }}>Project EE</h1> */}
        <Switch>
          <Route exact path="/" component={BulbForm} />
          <Route exact path='/results' component={Results} />
        </ Switch>
      </div>
    );
  }
}

export default App;

