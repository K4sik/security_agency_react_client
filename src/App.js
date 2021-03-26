import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TeamBoard from "./components/TeamBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTeam from "./components/Team/AddTeam";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/team" component={TeamBoard} />
            <Route exact path="/team/addTeam" component={AddTeam} />
          </div>
        </Router>
      </Provider>
    );
  }  
}

export default App;
