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

const Shops = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="shop-wrapper">
            <div className="shop-container">
                <h2>飲料店總覽</h2>
                <Row>
                    <Col xs="12" md="4" lg="3">
                        <Card>
                            <CardImg
                                top
                                width="30px"
                                height="200px"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdsakNc9_icV4v2aGsPcTiuRSlU1Ya2UQ5g&usqp=CAU"
                            />
                            <CardBody>
                                <CardTitle tag="h2">50嵐</CardTitle>
                                <CardText>飲料店</CardText>
                                <Button>查看菜單</Button>
                                <Button onClick={toggle}>我要開團</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="4" lg="3">
                        <Card>
                            <CardImg
                                top
                                width="30px"
                                height="200px"
                                src="https://www.boncity.com/s/img/infos/51790_1.jpg?20191014082537"
                            />
                            <CardBody>
                                <CardTitle tag="h2">可不可</CardTitle>
                                <CardText>飲料</CardText>
                                <Button>查看菜單</Button>
                                <Button>我要開團</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="4" lg="3">
                        <Card>
                            <CardImg
                                top
                                width="30px"
                                height="200px"
                                src="https://www.boncity.com/s/img/infos/51790_1.jpg?20191014082537"
                            />
                            <CardBody>
                                <CardTitle tag="h2">可不可</CardTitle>
                                <CardText>飲料</CardText>
                                <Button>查看菜單</Button>
                                <Button>我要開團</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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
                        <Button color="primary">送出</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default Shops;
