import React from "react";
import Logo from "./Logo";
import Mains from "./Main";
import Extras from "./Extras";
import Total from "./Total";
import { Provider } from "../Context";
import { mains, sides, drinks } from "./data";

import "./style.css";

export default function App() {
    return (
        <Provider>
            <div className="menu">
                {/* <Logo /> */}
                {/* <Mains meals={mains} /> */}
                <Extras type="Sides" items={sides} />
                <Extras type="Drinks" items={drinks} />
                <Total />
            </div>
        </Provider>
    );
}
