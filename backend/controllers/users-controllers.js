const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, "-password");
    } catch (err) {
        const error = new HttpError(
            "Fetching users failed, please try again later.",
            500
        );
        return next(error);
    }
    res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
    // const errors = validationResult(req);
    // console.log(req.body);
    // if (!errors.isEmpty()) {
    //     console.log(errors);
    //     return next(
    //         new HttpError("Invalid inputs passed, please check your data.", 422)
    //     );
    // }
    console.log(req);
    const { name, email, password } = req.body;

    console.log(name);
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            "User exists already, please login instead.",
            422
        );
        return next(error);
    }
    try {
        existingUser = await User.findOne({ name: name });
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            "User exists already, please login instead.",
            422
        );
        return next(error);
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (error) {
        const err = new HttpError(
            "Could not create user,please try again!",
            500
        );
        return next(err);
    }

    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        groups: [],
    });

    // console.log(createdUser);
    try {
        await createdUser.save();
    } catch (err) {
        // console.log(err);
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: createdUser.id, email: createdUser.email },
            "secret_key",
            { expiresIn: "1h" }
        );
    } catch (error) {
        const err = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(err);
    }

    res.status(201).json({
        userId: createdUser.id,
        email: createdUser.email,
        token: token,
    });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            "Loggin in failed, please try again later.",
            500
        );
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            401
        );
        return next(error);
    }
    console.log(existingUser);
    let isValidPassword;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (error) {
        const err = new HttpError(
            "Could not login, please check your credential",
            500
        );
        return next(err);
    }
    if (!isValidPassword) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            401
        );
        return next(error);
    }
    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            "secret_key",
            { expiresIn: "1h" }
        );
    } catch (err) {
        const error = new HttpError(
            "Logged in failed, please try again later",
            500
        );
        return next(error);
    }

    res.json({
        userId: existingUser.id,
        name: existingUser.name,
        token: token,
    });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
