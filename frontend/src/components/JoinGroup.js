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
import { CheckGroup } from "./axios/group";
import Menu from "./Menu";

const JoinGroup = ({ shops, name, token ,userId}) => {
    // var shopName = "test";

    const [modal, setModal] = useState(false);
    const [selectedShop, setSelectedShop] = useState("");
    const [description, setDescription] = useState("");
    const [outData, setData] = useState([]);
    const [gpId,setgpId] = useState('')
    // const [selctedIdx, setSelectIdx] = useState(-1);

    const createRequest = () => {
        setModal(!modal);
        //CreateGroup(name, selectedShop, description);
    };

    const toggle = (shopName,groupId) => {
        // console.log(index);
        setSelectedShop(shopName);
        setgpId(groupId)
        // console.log(shopName);
        // console.log(selctedIdx);
    };
    // console.log(shops.body);
    const render = outData.map((item, index) => {
        const shop = item.shop;
        console.log(item,'over')
        return (
            <Col xs="12" md="4" lg="3">
                <Card>
                    <CardImg top width="30px" height="200px" src={shop.img} />
                    <CardBody>
                        <CardTitle tag="h5">xxx的{shop.title} 團</CardTitle>
                        <CardText>{item.gp.description}</CardText>
                        <Button>查看菜單</Button>
                        <Button onClick={() => toggle(shop.title,item.gp.id)}>加入</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    });

    useEffect(() => {
        const Output = async () => {
            const group = await CheckGroup();
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

    // console.log(selctedIdx);

    return !selectedShop ? (
        <div className="shop-wrapper">
            <div className="shop-container">
                <h2>{shops.title}</h2>
                <Row>{render}</Row>
            </div>
        </div>
    ) : (
        <Menu selectedShop={selectedShop} groupId = {gpId} userId = {userId} />
    );
};

export default JoinGroup;
