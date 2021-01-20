import { React, useState, useEffect } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col,
    CardSubtitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import "./Mygroup.css";
import { CheckMyGroup, ChangeStatus } from "./axios/group";
import { SearchOrder } from "./axios/order";
import { useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const MyGroup = ({ shops, name, token, userId, setOrder }) => {
    // var shopName = "test";

    const classes = useStyles();
    const [status, setStatue] = useState("進行中");
    const [show,setShow] = useState("OnGoing")

    const handleChange = (event) => {
        setStatue(event.target.value);
        console.log(status)
        if(status !== "進行中" )
        {setShow("OnGoing")}
        else
            {setShow("closed")}
    };

    const [modal, setModal] = useState(false);
    const [selectedShop, setSelectedShop] = useState("");
    const [description, setDescription] = useState("");
    const [outData, setData] = useState([]);

    const history = useHistory();

    const routeChange = () => {
        let path = `order2`;
        history.push(path);
    };

    const createRequest = () => {
        setModal(!modal);
        //CreateGroup(name, selectedShop, description);
    };

    const toggle = async (shopName, groupId) => {
        // console.log(token);

        setSelectedShop(shopName);
        const orders = await SearchOrder(groupId);
        console.log(orders);
        setOrder(orders);
        const buffer = { order: orders };

        localStorage.setItem("order", JSON.stringify(buffer));
        //console.log(response)

        routeChange();
    };

    const changestate = async (groupId) => {
        await ChangeStatus(groupId, "closed");
    };

    // console.log(shops.body);
    const render = outData.map((item) => {
        const shop = item.shop;
        return (
            <Col xs="12" md="4" lg="3">
                <Card>
                    <CardImg top width="30px" height="200px" src={shop.img} />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.gp.leader.name} 的{shop.title} 團
                        </CardTitle>
                        <CardText>{item.gp.description}</CardText>
                        {item.gp.status === "OnGoing" ? (
                            <Button
                                onClick={() => {
                                    changestate(item.gp.id);
                                    window.location.reload();
                                }}
                            >
                                關團
                            </Button>
                        ) : null}

                        <Button onClick={() => toggle(shop.title, item.gp.id)}>
                            查看現況
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        );
    });

    useEffect(() => {
        const Output = async () => {
            var group = await CheckMyGroup(userId);
            if (!group) {
                group = [];
            }
            // console.log(group);
            var data = [];
            group.map((gp) => {
                console.log(gp.status);
                console.log(show)
                if (gp.status === show){
                    shops.body.map((shop) => {
                        // console.log(shop.title);
                        // console.log(gp.shop);
                        if (shop.title === gp.shop) {
                            // console.log("before", data);
                            data = [...data, { gp, shop }];
                        }
                    });
                }
            });
            setData(data);
        };
        Output();
    }, [status,show]);

    // console.log(outData);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "right" }}>
                <FormControl
                    className={classes.formControl}
                    style={{
                        marginTop: "5%",
                        marginLeft: "auto",
                        marginRight: "20%",
                    }}
                >
                    <InputLabel id="demo-simple-select-label">狀態</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        onChange={handleChange}
                    >
                        <MenuItem value={"進行中"}>進行中</MenuItem>
                        <MenuItem value={"已關閉"}>已關閉</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="shop-wrapper">
                <div className="shop-container">
                    <Row>{render}</Row>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader>{selectedShop}</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label>想說的話</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="請輸入文字..."
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={() => toggle()}>
                                取消
                            </Button>
                            <Button color="primary" onClick={createRequest}>
                                送出
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default MyGroup;
