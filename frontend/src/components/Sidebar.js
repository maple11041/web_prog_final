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
                                    style={{ fontSize: "1.75em" }}
                                />
                            </NavIcon>
                            <NavText>Home</NavText>
                        </NavItem>
                        <NavItem eventKey="shop">
                            <NavIcon>
                                <i className="fa fa-beer"></i>
                            </NavIcon>
                            <NavText>Shop</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            )}
        />
    );
};

export default Sidebar;
