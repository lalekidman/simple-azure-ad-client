import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import B2CContainer from './controller/b2c'
import OrganizationContainer from './controller/organization'
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={B2CContainer} />
        <Route path="/org" exact component={OrganizationContainer} />
      </Switch>
    </Router>
  );
}
