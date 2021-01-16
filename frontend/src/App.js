import { React, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";
import JoinGroup from "./components/JoinGroup";
import Sidebar from "./components/SIdebar";

function App() {
    const [username, setUsername] = useState("Guest");
    const [token, setToken] = useState("");

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
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRAK9qVnf0L2wrZgbI1N_Y-fObVwdxO9D3Q&usqp=CAU",
            },
        ],
    };
    return (
        <Router>
            <div className="App">
                <Route
                    render={({ location, history }) => (
                        <SideNav
                            onSelect={(selected) => {
                                const to = "/" + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="home">
                                <NavItem eventKey="home">
                                    <NavIcon>
                                        <i
                                            className="fa fa-fw fa-home"
                                            style={{ fontSize: "1.75em" }}
                                        />
                                    </NavIcon>
                                    <NavText>Home</NavText>
                                </NavItem>
                                <NavItem eventKey="devices">
                                    <NavIcon>
                                        <i
                                            className="fa fa-fw fa-device"
                                            style={{ fontSize: "1.75em" }}
                                        />
                                    </NavIcon>
                                    <NavText>Devices</NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                    )}
                />
                <NavBar />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Login setName={setUsername} setToken={setToken} />
                        )}
                    />
                    <Route
                        path="/sign-in"
                        component={() => (
                            <Login setName={setUsername} setToken={setToken} />
                        )}
                    />
                    <Route
                        path="/sign-up"
                        component={() => (
                            <SignUp setName={setUsername} setToken={setToken} />
                        )}
                    />
                    <Route
                        path="/shop"
                        component={() => (
                            <Shops
                                shops={shopData}
                                name={username}
                                token={token}
                            />
                        )}
                    />
                    <Route
                        path="/add"
                        component={() => (
                            <JoinGroup
                                shops={shopData}
                                name={username}
                                token={token}
                            />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
