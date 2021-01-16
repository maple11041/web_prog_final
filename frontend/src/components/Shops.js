import { React, useState } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import "./Shop.css";
import { CreateGroup } from "./axios/group";

const Shops = ({ shops, name, token }) => {
    // var shopName = "test";

    const [modal, setModal] = useState(false);
    const [selectedShop, setSelectedShop] = useState("");
    const [description, setDescription] = useState("");

    const createRequest = () => {
        setModal(!modal);
        CreateGroup(name, selectedShop, description);
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
    const render = shops.body.map((shop) => {
        return (
            <Col xs="12" md="4" lg="3">
                <Card>
                    <CardImg top width="30px" height="200px" src={shop.img} />
                    <CardBody>
                        <CardTitle tag="h2">{shop.title}</CardTitle>
                        <CardText>{shop.text}</CardText>
                        <Button>查看菜單</Button>
                        <Button onClick={() => toggle(shop.title)}>
                            我要開團
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        );
    });
    // console.log(render);

    return (
        <div className="shop-wrapper">
            <div className="shop-container">
                <h2>{shops.title}</h2>
                <Row>{render}</Row>
                <Modal isOpen={modal} toggle={() => toggle()}>
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

export default Shops;
