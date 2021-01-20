import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import { Route } from "react-router-dom";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
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
                        <NavItem eventKey="shop">
                            <NavIcon>
                                <AddCircleOutlinedIcon />
                            </NavIcon>
                            <NavText>我要開團</NavText>
                        </NavItem>
                        <NavItem eventKey="add">
                            <NavIcon>
                                <TrendingUpIcon />
                            </NavIcon>
                            <NavText>進行中的團</NavText>
                        </NavItem>
                        <NavItem eventKey="my">
                            <NavIcon>
                                <PlaylistAddCheckIcon />
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
