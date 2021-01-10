import React,{onClick,useState} from "react";
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
import "./OnGoing.css"
import Current from "./Current"
import History from "./History"

const Shops = () => {
    const[going,setGoing] = useState(true)
    //const[finish,setFinish] = useState(false)

    const boxclass = (e) =>{
        if(e)
        {
            return "mlb-box-list selected-mlb-box-list"
        }
        return "mlb-box-list"
    }


    return (
        <div className="shop-wrapper">
            <div className="shop-container">
                <ul className="  mlb-box">
                    <li className={boxclass(going)} >
                        <div className="mlb-box-text " onClick = {(e)=>{e.preventDefault();setGoing(true)}}   >進行中</div>
                    </li>
                    <li className={boxclass(!going)} >
                        <div className="mlb-box-text" onClick = {(e)=>{e.preventDefault();setGoing(false)}} >已完結</div>
                    </li>
                </ul>
                {going? <Current/>:<History/>}
            </div>
        </div>
    );
};

export default Shops;
