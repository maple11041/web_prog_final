import React, { useContext } from "react";
import { Context } from "../Context";
import data from "./data";

export default function Total({ total }) {
    return (
        <div className="total">
            <span className="total-title">Total:</span>
            <span className="total-price">${total}</span>
        </div>
    );
}
