import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import { Route } from "react-router-dom";
import "./SideBar.css";
const Sidebar = () => {
    return (
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
                                    style={{ fontSize: "1.7em" }}
                                />
                            </NavIcon>
                            <NavText>Home</NavText>
                        </NavItem>
                        <NavItem eventKey="shop">
                            <NavIcon>
                                <i
                                    className="fa fa-users"
                                    style={{ fontSize: "1.7em" }}
                                ></i>
                            </NavIcon>
                            <NavText>我要開團</NavText>
                        </NavItem>
                        <NavItem eventKey="add">
                            <NavIcon>
                                <i
                                    className="fa fa-beer"
                                    style={{ fontSize: "1.75em" }}
                                ></i>
                            </NavIcon>
                            <NavText>進行中的團</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            )}
        />
    );
};

export default Sidebar;
