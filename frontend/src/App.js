import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";

function App() {
    const shopData = {
        title: "飲料店總覽",
        body: [
            {
                title: "50嵐",
                text: "飲料店",
                img:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdsakNc9_icV4v2aGsPcTiuRSlU1Ya2UQ5g&usqp=CAU",
            },
            {
                title: "可不可",
                text: "飲料店",
                img:
                    "https://www.boncity.com/s/img/infos/51790_1.jpg?20191014082537",
            },
            {
                title: "茶湯會",
                text: "飲料店",
                img:
                    "https://www.boncity.com/s/img/infos/51790_1.jpg?20191014082537",
            },
        ],
    };
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route
                        path="/shop"
                        component={() => <Shops shops={shopData} />}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
