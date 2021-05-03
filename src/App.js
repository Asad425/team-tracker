
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
           
            <Route path="/teamDetails/:teamId">
                  <TeamDetails></TeamDetails>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
          
      </div>
  );
}

export default App;
