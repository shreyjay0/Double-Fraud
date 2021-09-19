import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Webscan from "./pages/Webscan";
import News from "./pages/News";
import Library from "./pages/Library";
import Report from "./pages/Report";
import Help from "./pages/Help";

import Data from "./pages/dummyLib.json";
import FullNews from "./components/fullNews/FullNews";
import React, { Component } from 'react'
import Register from "./pages/Register";
import Login from './pages/Login'

export class App extends Component {

  state = {reports:null}

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('./report');
    const data = await response.json();
    this.setState({ reports: data })
}

  render() {
    return (
      <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/webscan" component={Webscan} />
          <Route path="/library" render={(props) => <Library data={this.state.reports} />} />
          <Route path="/news" component={News} />
          <Route path="/full-news" component={FullNews} />
          <Route path="/report" component={Report} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      <Register/>
      </Router>
    </div>
    )
  }
}

export default App
