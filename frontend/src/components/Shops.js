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
    CardSubtitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import "./Shop.css";
import {CreateGroup} from './axios/group'

const Shops = ({ shops,name,token }) => {
    var shopName = 'test'

    const [modal, setModal] = useState(false);

    const createRequest = () => {
        setModal(!modal)
        CreateGroup(token,shopName)
        
    }

    const toggle = () => {
        if(token === '')
            alert('Please login first')
        else
            setModal(!modal)
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
                        <Button onClick={toggle}>我要開團</Button>
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
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader>50嵐</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>想說的話</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="請輸入文字..."
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            取消
                        </Button>
                        <Button color="primary" onClick = {createRequest}>送出</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default Shops;
