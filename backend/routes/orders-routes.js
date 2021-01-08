const express = require("express");

const ordersController = require("../controllers/orders-controllers");
const router = express.Router();

// router.get("/", groupsController.getAllGroups);

router.post("/", ordersController.createOrder);

module.exports = router;
