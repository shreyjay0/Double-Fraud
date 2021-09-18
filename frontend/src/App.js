import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Webscan from "./pages/Webscan";
import News from "./pages/News";
import Library from "./pages/Library";
import Report from "./pages/Report";
import Help from "./pages/Help";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch className="main">
            <Route path='/webscan' component={Webscan} />
            <Route path='/library' component={Library} />
            <Route path='/news' component={News} />
            <Route path='/report' component={Report} />
            <Route path='/help' component={Help} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
