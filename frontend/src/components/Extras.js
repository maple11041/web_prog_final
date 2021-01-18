import React from "react";
import Input from "./Input";

export default function Extras({ type, items, orderItems, setOrderItems }) {
    // console.log(items[0].price_L);
    return (
        <section className="extras">
            <h5 className="large">M</h5>
            <h5 className="med">L</h5>
            {items.map((item, index) => (
                // console.log(item)
                // console.log(item.price)
                <article className="menu-item" key={index}>
                    <div className="extras-name">{item.name}</div>
                    <Input
                        type="M"
                        index={index}
                        price={item.price_M}
                        orderItems={orderItems}
                        setOrderItems={setOrderItems}
                    />
                    <strong className="extras-price">${item.price_M}</strong>
                    <Input
                        type="L"
                        index={index}
                        price={item.price_M}
                        orderItems={orderItems}
                        setOrderItems={setOrderItems}
                    />
                    <strong className="extras-price">${item.price_L}</strong>
                </article>
            ))}
        </section>
    );
}
