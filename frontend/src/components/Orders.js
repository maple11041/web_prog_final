import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table,
} from "reactstrap";
import "./Order.css";

const Orders = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <div className="order-wrapper">
            <Card>
                <CardBody>
                    <Table className="no-wrap v-middle" responsive>
                        <thead>
                            <tr className="border-0">
                                <th className="border-0">訂購人</th>
                                <th className="border-0">品項</th>
                                <th className="border-0">金額</th>
                                <th className="border-0">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h5 className="mb-0 font-16 font-medium">
                                        Hanna Gover
                                    </h5>
                                </td>
                                <td>Elite Admin</td>
                                <td>$100</td>
                                <td>
                                    <i
                                        className="fa fa-circle text-warning"
                                        id="tlp1"
                                    ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 className="mb-0 font-16 font-medium">
                                        Daniel Kristeen
                                    </h5>
                                </td>
                                <td>Xtreme Admin</td>
                                <td>$100</td>
                                <td>
                                    <i
                                        className="fa fa-circle text-success"
                                        id="tlp2"
                                    ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 className="mb-0 font-16 font-medium">
                                        Julian Josephs
                                    </h5>
                                </td>
                                <td>Admin-Pro Admin</td>
                                <td>$100</td>
                                <td>
                                    <i
                                        className="fa fa-circle text-success"
                                        id="tlp3"
                                    ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h5 className="mb-0 font-16 font-medium">
                                        Jan Petrovic
                                    </h5>
                                </td>
                                <td>Admin-Wrap Admin</td>
                                <td>$100</td>
                                <td>
                                    <i
                                        className="fa fa-circle text-warning"
                                        id="tlp4"
                                    ></i>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
};

export default Orders;
