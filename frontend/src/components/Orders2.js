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

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { changePaidStatus } from "./axios/order";

import "./Order.css";

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();
    const [state, setState] = useState({
        checkedB: row.paid,
    });
    // console.log(row);
    const handleCheck = async (orderId, status, event) => {
        const order = await changePaidStatus(orderId, !status);
        // console.log(order);
        setState({
            ...state,
            [event.target.name]: !status,
        });
    };

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="center">
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                                checked={state.checkedB}
                                onClick={(e) =>
                                    handleCheck(row.orderId, state.checkedB, e)
                                }
                            />
                        }
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                訂單
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>品項</TableCell>
                                        <TableCell align="right">
                                            數量
                                        </TableCell>
                                        <TableCell align="right">
                                            總金額
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.orderId}>
                                            <TableCell>
                                                {historyRow.item.map((item) => (
                                                    <div>{item}</div>
                                                ))}
                                            </TableCell>
                                            <TableCell align="right">
                                                {historyRow.number.map(
                                                    (item) => (
                                                        <div>{item}</div>
                                                    )
                                                )}
                                            </TableCell>
                                            <TableCell align="right">
                                                {historyRow.price}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
/*
Row.propTypes = {
  row: PropTypes.shape({
    price: PropTypes.number.isRequired,
    paid: PropTypes.number.isRequired,
    
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};
*/
function FirstStep(orders) {
    var rows = [];
    console.log(orders);
    orders.map((e) => {
        console.log(e);
        var item = [];
        var number = [];
        var same = false;
        const orderId = e._id;
        const userId = e.creator.name;
        e.orderItems.map((f) => {
            item = [...item, f.item];
            number = [...number, f.num];
        });
        const paid = e.payed;
        const price = e.amount;
        console.log(orderId, userId, item, number, paid, price);
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].name === userId) {
                rows[i].history = [
                    { orderId, item, number, price },
                    ...rows[i].history,
                ];
                rows[i].price = rows[i].price + price;
                same = true;
                break;
            }
        }
        if (!same) {
            rows = [
                ...rows,
                CreateNew(orderId, userId, item, number, paid, price),
            ];
        }
        console.log(rows);
    });
    console.log(rows);
    return rows;
}

function CreateNew(orderId, name, item, number, paid, price) {
    return {
        orderId,
        name,
        price,
        paid,
        history: [{ item, number, price }],
    };
}

export default function CollapsibleTable({ order }) {
    const [outRow,setRow] = useState([])
    
    useEffect(() => {
        if(order)
        {  setRow(FirstStep(order));}
        else 
        {
            console.log('OAO')
        }
    }, [order]);
    return (
        <div className="table-wrapper">
            <TableContainer component={Paper} style={{ width: "80%" }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>訂購人</TableCell>
                            <TableCell align="right">總金額</TableCell>
                            <TableCell align="center">付款狀態</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {outRow.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
