import { React, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";
import JoinGroup from "./components/JoinGroup";
import Sidebar from "./components/Sidebar";
import MyGroup from "./components/MyGroup";
import Orders from "./components/Orders";
import Menu from "./components/Menu";

import Orders2 from "./components/Orders2";
function App() {
    const [username, setUsername] = useState("Guest");
    const [token, setToken] = useState("");
    const [userId, setId] = useState("");
    const [order, setOrder] = useState("123")

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
                title: "迷客夏",
                text: "飲料店",
                img:
                    "data:image/png;base64,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",
            },
        ],
    };
    return (
        <Router>
            <Sidebar />
            <div className="App">
                <NavBar token={token} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Login
                                setName={setUsername}
                                setToken={setToken}
                                setId={setId}
                            />
                        )}
                    />
                    <Route
                        path="/sign-in"
                        component={() => (
                            <Login
                                setName={setUsername}
                                setToken={setToken}
                                setId={setId}
                            />
                        )}
                    />
                    <Route
                        path="/sign-up"
                        component={() => (
                            <SignUp
                                setName={setUsername}
                                setToken={setToken}
                                setId={setId}
                            />
                        )}
                    />
                    <Route
                        path="/shop"
                        component={() => (
                            <Shops
                                shops={shopData}
                                name={username}
                                token={token}
                                userId={userId}
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
                                userId={userId}
                            />
                        )}
                    />
                    <Route
                        path="/my"
                        component={() => (
                            <MyGroup
                                shops={shopData}
                                name={username}
                                token={token}
                                userId={userId}
                                setOrder = {setOrder}
                            />
                        )}
                    />
                    <Route path="/order2" component={() => (
                            <Orders2
                                order={order}
                            />
                        )}
                    />

                    <Route path="/menu" component={Menu} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
