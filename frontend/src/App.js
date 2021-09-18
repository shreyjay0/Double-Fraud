import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Webscan from "./pages/Webscan";
import News from "./pages/News";
import Library from "./pages/Library";
import Report from "./pages/Report";
import Help from "./pages/Help";

import Data from "./pages/dummyLib.json";
import FullNews from "./components/fullNews/FullNews";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/webscan" component={Webscan} />
          <Route path="/library" render={(props) => <Library data={Data} />} />
          <Route path="/news" component={News} />
          <Route path="/full-news" component={FullNews} />
          <Route path="/report" component={Report} />
          <Route path="/help" component={Help} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
