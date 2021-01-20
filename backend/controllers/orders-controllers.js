const { body } = require("express-validator");
const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const HttpError = require("../models/http-error");
const Group = require("../models/group");
const User = require("../models/user");
const Order = require("../models/order");

const createOrder = async (req, res, next) => {
    const { creator, orderItems, amount, groupId } = req.body;
    const createdOrder = new Order({
        creator,
        orderItems,
        amount,
        payed: false,
        group: groupId,
    });
    let group;
    try {
        group = await Group.findById(groupId);
    } catch (err) {
        const error = new HttpError(
            "Create order failed, please try again",
            500
        );
        return next(error);
    }
    if (!group) {
        const error = new HttpError("Could not find this Group!", 401);
        return next(error);
    }
    console.log(createdOrder);

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdOrder.save({ session: sess });
        group.orders.push(createdOrder);
        await group.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        console.log(err);
        const error = new HttpError("Creating Order failed, please try again!");
        return next(error);
    }

    res.status(201).json({ order: createdOrder });
};

const getOrderByGroupId = async (req, res, next) => {
    let groupId = req.params.gid;

    let groupOrders;
    try {
        groupOrders = await Order.find({ group: groupId }).populate({
            path: "creator",
            select: "name",
        });
        console.log(groupOrders);
    } catch (error) {
        const err = new HttpError(
            "Fetching groups failed, please try again",
            500
        );
        return next(err);
    }
    if (!groupOrders) {
        return next(
            new HttpError("Could not find orders for provided group id", 404)
        );
    }

    res.json({
        orders: groupOrders.map((order) => order.toObject({ getters: true })),
    });
};

const getOrderByUid = async (req, res, next) => {
    let userId = req.params.uid;

    let userOrders;
    try {
        userOrders = await Order.find({ creator: userId }).populate({
            path: "group",
            select: "leader",
            populate: { path: "leader", model: "User", select: "name" },
        });
        console.log(userOrders);
    } catch (error) {
        const err = new HttpError(
            "Fetching groups failed, please try again",
            500
        );
        return next(err);
    }
    if (!userOrders) {
        return next(
            new HttpError("Could not find orders for provided user id", 404)
        );
    }

    res.json({
        orders: userOrders,
    });
};

const updateOrderPayed = async (req, res, next) => {
    const { payed } = req.body;

    const orderId = req.params.oid;

    let order;
    try {
        order = await Order.findById(orderId);
    } catch (err) {
        return next(
            new HttpError("Something went wrong, could not update order", 500)
        );
    }

    order.payed = payed;

    try {
        await order.save();
    } catch (error) {
        return next(
            new HttpError("Something went wrong, could not update order", 500)
        );
    }
    res.status(200).json(order);
};

exports.createOrder = createOrder;
exports.getOrderByGroupId = getOrderByGroupId;
exports.getOrderByUid = getOrderByUid;
exports.updateOrderPayed = updateOrderPayed;
