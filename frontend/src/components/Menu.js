import React, { useState, useEffect } from "react";
import Extras from "./Extras";
import Total from "./Total";
import Mains from "./Main";
import { Provider } from "../Context";
import { Button } from "reactstrap";
import { mains, sides, drinks } from "./data";
import { shops } from "./shops.json";

import "./Menu.css";
import { PlaceOrder } from "./axios/order";

export default function Menu({ selectedShop,groupId,userId }) {
    console.log(selectedShop);
    const [shopItem, setShopItem] = useState(
        shops.find((shop) => shop.Name === selectedShop).items
    );
    const [orderItems, setOrderItems] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const SendOrder = (e) => {
        e.preventDefault()
        console.log(shopItem)
        console.log(orderItems)
        console.log(Object.keys(orderItems))
        console.log(orderItems[1])
        const orderForm = Object.keys(orderItems).map((item) => {
            //console.log("hi")
            const [index, type] = item.split("-");
            //console.log(b)
            //console.log(type)
            console.log(orderItems[item])
            //console.log(item)
            //console.log(orderItems.item)
            const key = shopItem[index].name + "-" +type 
            console.log(key)
            return {item:key, num: orderItems[item]}
        })
        console.log(orderForm)
        //const newItem = orderForm.reduce((a, b) => Object.assign({}, a, b));
        //console.log(newItem)
        console.log(selectedShop)
        console.log(groupId)
        console.log(userId)
        PlaceOrder(userId,orderForm,totalPrice,groupId)
    }

    // console.log(shopItem);
    // console.log(shops[0]["items"]);
    useEffect(() => {
        console.log(orderItems);
        const total = Object.keys(orderItems).reduce((acc, curr) => {
            console.log("here",curr)
            const [index, type] = curr.split("-");
            const price =
                type === "M"
                    ? shopItem[parseInt(index)].price_M
                    : shopItem[parseInt(index)].price_L;
            return acc + orderItems[curr] * price;
        }, 0);
        setTotalPrice(total);
    }, [orderItems]);
    return (
        <>
            <div className="menu">
                <div className="extra-wrapper">
                    <Extras
                        type="Sides"
                        items={shopItem}
                        orderItems={orderItems}
                        setOrderItems={setOrderItems}
                    />
                </div>
                <Total total={totalPrice} />
            </div>
            <div className="button-wrapper">
                <Button onClick = {SendOrder}>送出</Button>
            </div>
        </>
    );
}
