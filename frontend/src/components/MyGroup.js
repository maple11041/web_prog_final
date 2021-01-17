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
import "./Shop.css";
import { CheckMyGroup } from "./axios/group";

const MyGroup = ({ shops, name, token }) => {
    // var shopName = "test";

    const [modal, setModal] = useState(false);
    const [selectedShop, setSelectedShop] = useState("");
    const [description, setDescription] = useState("");
    const [outData, setData] = useState([]);

    const createRequest = () => {
        setModal(!modal);
        //CreateGroup(name, selectedShop, description);
    };

    const toggle = (shopName) => {
        // console.log(token);

        if (token === "") alert("Please login first");
        else {
            setModal(!modal);
            setSelectedShop(shopName);
        }
    };
    // console.log(shops.body);
    const render = outData.map((item) => {
        const shop = item.shop;
        return (
            <Col xs="12" md="4" lg="3">
                <Card>
                    <CardImg top width="30px" height="200px" src={shop.img} />
                    <CardBody>
                        <CardTitle tag="h5">xxx的{shop.title} 團</CardTitle>
                        <CardText>{item.gp.description}</CardText>
                        <Button>查看菜單</Button>
                        <Button onClick={() => toggle(shop.title)}>
                            查看現況
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        );
    });

    useEffect(() => {
        const Output = async () => {
            const group = await CheckMyGroup(name);//tochange:暫時用name之後要改成id
            console.log(group);
            var data = [];
            group.map((gp) => {
                console.log(gp.status);
                if (gp.status === "OnGoing") {
                    shops.body.map((shop) => {
                        console.log(shop.title);
                        console.log(gp.shop);
                        if (shop.title === gp.shop) {
                            console.log("before", data);
                            data = [...data, { gp, shop }];
                        }
                    });
                }
            });
            setData(data);
        };
        Output();
    }, []);

    console.log(outData);

    return (
        <div className="shop-wrapper">
            <div className="shop-container">
                <h2>{shops.title}</h2>
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
                                onChange={(e) => setDescription(e.target.value)}
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
    );
};

export default MyGroup;
