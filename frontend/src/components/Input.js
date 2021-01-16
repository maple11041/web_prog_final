import React, { useContext } from "react";
import { Context } from "../Context";

export default function Input({
    type,
    name,
    index,
    orderItems,
    setOrderItems,
}) {
    // const [items, updateItem] = useContext(Context);

    // console.log(price);
    // console.log(totalPrice);
    const updateItem = (count) => {
        const key = `${index}-${type}`;
        const amount = Number.isNaN(count) ? 0 : Number(count);

        setOrderItems({ ...orderItems, [key]: Number(amount) });
        // console.log(orderItems);
    };
    return (
        <input
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            onChange={(e) => {
                updateItem(e.target.value);
            }}
        />
    );
}
