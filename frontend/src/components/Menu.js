import React from "react";
import Extras from "./Extras";
import Total from "./Total";
import { Provider } from "../Context";
import { Button } from "reactstrap";
import { mains, sides, drinks } from "./data";

import "./Menu.css";

export default function App() {
    return (
        <Provider>
            <div className="menu">
                {/* <Logo /> */}
                {/* <Mains meals={mains} /> */}
                <div>
                    <Extras type="Sides" items={sides} />
                </div>
                <div>
                    <Extras type="Sides" items={sides} />
                </div>
                <div>
                    <Extras type="Sides" items={sides} />
                </div>
                {/* <Extras type="Drinks" items={drinks} /> */}
                <Total />
            </div>
            <div className="button-wrapper">
                <Button>送出</Button>
            </div>
        </Provider>
    );
}
