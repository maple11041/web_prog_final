import { React, useState } from "react";
import {
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import "./Shop.css";
import { CreateGroup } from "./axios/group";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Shops = ({ shops, name, token, userId }) => {
    // var shopName = "test";

    const [modal, setModal] = useState(false);
    const [selectedShop, setSelectedShop] = useState("");
    const [description, setDescription] = useState("");
    const classes = useStyles();

    const createRequest = () => {
        setModal(!modal);
        CreateGroup(userId, selectedShop, description);
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
            <Card className={classes.root} style={{ margin: "3%" }}>
                <CardActionArea style={{ outline: "none" }}>
                    <CardMedia
                        style={{ height: "200px", width: "250px" }}
                        className={classes.media}
                        image={shop.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {shop.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {shop.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        style={{ outline: "none" }}
                        size="medium"
                        color="primary"
                    >
                        查看菜單
                    </Button>
                    <Button
                        size="medium"
                        color="primary"
                        onClick={() => toggle(shop.title)}
                        style={{ outline: "none" }}
                    >
                        我要開團
                    </Button>
                </CardActions>
            </Card>
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
