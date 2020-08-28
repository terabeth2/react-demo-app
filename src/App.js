import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Contact from './components/clock/clock';
import Welcome from './components/welcome/welcome'
import Clock from './components/clock/clock';
import contact from './components/contact/contact'
import Navigation from './components/navigation/Navigation'
import NoMatch from './components/noMatch/NoMatch'
import Jeopardy from './components/jeopardy/Jeopardy';


function App() {  
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact path="/"
          render={(props) => <Welcome {...props} name="Tera" />} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

