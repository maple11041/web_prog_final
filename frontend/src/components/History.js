import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./Order.css";
import {SearchWhatIBought} from "./axios/order"
import { useHistory } from "react-router-dom";



export default function CollapsibleTable({userId,setOrder}) {
    
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `myorder`; 
        history.push(path);
    }
    useEffect(() => {
        const Output = async () => {
            const order = await SearchWhatIBought(userId);
            console.log(order)
            const order2 = order.map((item) => {
                item.creator = item.group.leader.name
                return item
            })
            console.log(order2)
            setOrder(order2)
            routeChange()
        };
        Output();
    }, []);
    return(<></>)
}
