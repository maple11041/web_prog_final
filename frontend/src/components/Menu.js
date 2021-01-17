import React, { useState, useEffect } from "react";
import Extras from "./Extras";
import Total from "./Total";
import Mains from "./Main";
import { Provider } from "../Context";
import { Button } from "reactstrap";
import { mains, sides, drinks } from "./data";
import { shops } from "./shops.json";

import "./Menu.css";

export default function Menu() {
    const [shopItem, setShopItem] = useState(shops[1]["items"]);
    const [orderItems, setOrderItems] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    // console.log(shopItem);
    // console.log(shops[0]["items"]);
    useEffect(() => {
        // console.log(orderItems);
        const total = Object.keys(orderItems).reduce((acc, curr) => {
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
                <Button>送出</Button>
            </div>
        </>
    );
}
