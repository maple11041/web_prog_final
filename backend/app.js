require("dotenv-defaults").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users-routes");
const groupRoutes = require("./routes/groups-routes");
const orderRoutes = require("./routes/orders-routes");
const HttpError = require("./models/http-error");

const app = express();

if (!process.env.MONGO_URL) {
    console.error("Missing MONGO_URL!!!");
    process.exit(1);
}

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
});

app.use("/api/users", usersRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/orders", orderRoutes);

app.use((req, res, next) => {
    const error = new HttpError("Could not find this route.", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Server is up on port 5000");
        app.listen(5000, "0.0.0.0");
    })
    .catch((err) => {
        console.log(err);
    });
