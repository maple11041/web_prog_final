import { Link, useHistory } from "react-router-dom";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
const NavBar = ({ token, name, setName, setId, setToken }) => {
    let history = useHistory();

    const RightBar = () => {
        console.log("token", token);
        if (token === "") {
            return (
                <>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to={"/sign-in"}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to={"/sign-up"}>
                            Sign up
                        </Link>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/hist"}>
                            我的訂單
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            onClick={logout}
                            className="nav-link"
                            to={"/sign-in"}
                        >
                            登出
                        </Link>
                    </li>
                </>
            );
        }
    };

    const logout = (e) => {
        e.preventDefault();
        setName("Guest");
        setId("");
        setToken("");
        localStorage.clear();
        history.push("/sign-in");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <LocalDrinkIcon />
                <Link
                    className="navbar-brand"
                    to={"/sign-in"}
                    style={{ marginLeft: "2%" }}
                >
                    Hello, {name}
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">{RightBar()}</ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
