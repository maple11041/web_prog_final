import { Link } from "react-router-dom";
const NavBar = ({ token }) => {
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
                        <Link className="nav-link" to={"/my"}>
                            我開的團
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/hist"}>
                            我的訂單
                        </Link>
                    </li>
                </>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>
                    positronX.io
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">{RightBar()}</ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
