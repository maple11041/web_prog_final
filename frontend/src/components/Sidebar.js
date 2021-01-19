import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import { Route } from "react-router-dom";
import StoreSharpIcon from "@material-ui/icons/StoreSharp";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
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
                                <AddCircleOutlinedIcon />
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
                        <NavItem eventKey="my">
                            <NavIcon>
                                <i
                                    className="fa fa-beer"
                                    style={{ fontSize: "1.75em" }}
                                ></i>
                            </NavIcon>
                            <NavText>管理我的團</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            )}
        />
    );
};

export default Sidebar;
