import { React, useEffect, useState } from "react";

import "./Order.css";
import { SearchWhatIBought } from "./axios/order";
import { useHistory } from "react-router-dom";

export default function CollapsibleTable({ userId, setOrder }) {
    const history = useHistory();
    const routeChange = () => {
        let path = `myorder`;
        history.push(path);
    };
    useEffect(() => {
        const Output = async () => {
            const order = await SearchWhatIBought(userId);
            // console.log(order);
            const order2 = order.map((item) => {
                item.creator = item.group.leader.name;
                item.shopName = item.group.shop;
                return item;
            });
            // console.log(order2);
            setOrder(order2);
            const buffer = {order:order2}
            
        localStorage.setItem('order', JSON.stringify(buffer))
        //console.log(response)
            routeChange();
        };
        Output();
    }, []);
    return <></>;
}
