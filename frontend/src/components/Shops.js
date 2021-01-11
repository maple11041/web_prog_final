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
                    <Col xs="12" md="4">
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
                    <Col xs="12" md="4">
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
                    <Col xs="12" md="4">
                        <Card>
                            <CardImg
                                top
                                width="30px"
                                height="200px"
                                src="data:image/jpeg;base64,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"
                            />
                            <CardBody>
                                <CardTitle tag="h2">茶湯會</CardTitle>
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
