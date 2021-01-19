const HttpError = require("../models/http-error");
const Group = require("../models/group");
const User = require("../models/user");
const { body } = require("express-validator");

const getAllGroups = async (req, res, next) => {
    let groups;
    try {
        groups = await Group.find();
    } catch (err) {
        const error = new HttpError(
            "Fetching groups failed, please try again later.",
            500
        );
        return next(error);
    }
    res.status(201).json({
        groups: groups.map((group) => group.toObject({ getters: true })),
    });
};

const getCreateGroupsByUid = async (req, res, next) => {
    let userId = req.params.uid;

    let userGroups;
    try {
        userGroups = await Group.find({ leader: userId });
        console.log(userGroups);
    } catch (error) {
        const err = new HttpError(
            "Fetching groups failed, please try again",
            500
        );
        return next(err);
    }
    if (!userGroups) {
        return next(
            new HttpError("Could not find groups for provided user id", 404)
        );
    }

    res.json({
        groups: userGroups.map((group) => group.toObject({ getters: true })),
    });
};

const createGroup = async (req, res, next) => {
    const { leader, shop, description } = req.body;

    const newGroup = new Group({
        leader,
        shop,
        description,
        status: "OnGoing",
        order: [],
    });
    let user;
    try {
        user = await User.findById(leader);
    } catch (error) {
        const err = new HttpError("Create Group failed, please try again", 500);
        return next(err);
    }
    if (!user) {
        const error = new HttpError("Invalid user", 500);
        return next(error);
    }
    try {
        await newGroup.save();
    } catch (err) {
        // console.log(err);
        const error = new HttpError(
            "Create Group fail, please try again!",
            500
        );
        return next(error);
    }
    res.status(201).json({ group: newGroup });
};

const updateOrderStatus = async (req, res, next) => {
    const { status } = req.body;

    console.log(status);

    const groupId = req.params.gid;

    let group;
    try {
        group = await Group.findById(groupId);
    } catch (err) {
        // console.log(err);
        return next(
            new HttpError("Something went wrong, could not update group", 500)
        );
    }
    console.log(group);

    group.status = status;

    try {
        await group.save();
    } catch (error) {
        return next(
            new HttpError("Something went wrong, could not update order", 500)
        );
    }
    res.status(200).json(group);
};

exports.getAllGroups = getAllGroups;
exports.createGroup = createGroup;
exports.getCreateGroupsByUid = getCreateGroupsByUid;
exports.updateOrderStatus = updateOrderStatus;
