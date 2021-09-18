import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function navbar() {
    return (
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/annual' component={AnnualReport} />
            <Route path='/team' component={Teams} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </Router>
      );
}

export default navbar
