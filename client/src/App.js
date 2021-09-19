import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Webscan from "./pages/Webscan";
import News from "./pages/News";
import Library from "./pages/Library";
import Report from "./pages/Report";
import Help from "./pages/Help";
// import Data from "./pages/dummyLib.json";
import FullNews from "./components/fullNews/FullNews";
import React, { Component } from 'react'
import Register from "./pages/Register";
import Login from './pages/Login'
import { useContext , useState, useEffect} from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [posts, setposts] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(async() => {
     
    const response = await fetch('http://localhost:3030/api/post');
    const data = await response.json();
    setposts(data);
  },[])

  return (
    <Router>
  <Navbar />
      <Switch>
        <Route exact path="/">
          {user ? <Webscan /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/webscan" >{user ? <Webscan /> : <Register />}</Route>
        <Route path="/library" >{user ? <Library data={posts} /> : <Register />}</Route>
        <Route path="/news" >{user ? <News /> : <Register />}</Route>
        <Route path="/full-news" >{user ? <FullNews /> : <Register />}</Route>
        <Route path="/report" >{user ? <Report /> : <Register />}</Route>
        <Route path="/help" >{user ? <Help /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;