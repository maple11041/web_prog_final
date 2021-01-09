import React from "react";
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
} from "reactstrap";
import "./Shop.css";

const Shops = () => {
    return (
        <div className="shop-wrapper">
            <div className="shop-container">
                <h2>飲料店總覽</h2>
                <Row>
                    <Col>
                        <Card>
                            <CardImg
                                top
                                width="50%"
                                height="20%"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdsakNc9_icV4v2aGsPcTiuRSlU1Ya2UQ5g&usqp=CAU"
                            />
                            <CardBody>
                                <CardTitle>50嵐</CardTitle>
                                <CardText>飲料店</CardText>
                                <Button>我要開團</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card>
                            <CardImg
                                top
                                width="50%"
                                src="https://wrappixel.com/demos/free-admin-templates/materialpro-reactadmin-lite/main/static/media/img1.f098478b.jpg"
                            />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>
                                    Some quick example text to build on the card
                                </CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card>
                            <CardImg
                                top
                                width="100%"
                                src="https://wrappixel.com/demos/free-admin-templates/materialpro-reactadmin-lite/main/static/media/img1.f098478b.jpg"
                            />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardText>
                                    Some quick example text to build on the card
                                </CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Shops;
