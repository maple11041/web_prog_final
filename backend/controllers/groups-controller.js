const HttpError = require("../models/http-error");
const Group = require("../models/group");
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

const createGroup = async (req, res, next) => {
    const { leader, shop } = req.body;

    const newGroup = new Group({
        leader,
        shop,
        status: "OnGoing",
        users: [],
    });
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

exports.getAllGroups = getAllGroups;
exports.createGroup = createGroup;
