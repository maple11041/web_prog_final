import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";
import OnGoing from "./components/OnGoing"

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/shop" component={Shops} />
                    <Route path="/ongoing" component={OnGoing} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
