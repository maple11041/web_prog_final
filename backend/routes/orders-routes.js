const express = require("express");

const ordersController = require("../controllers/orders-controllers");
const router = express.Router();

// router.get("/", groupsController.getAllGroups);

router.post("/", ordersController.createOrder);
router.get("/:gid", ordersController.getOrderByGroupId);
router.get("/user/:uid", ordersController.getOrderByUid);
router.patch("/:oid", ordersController.updateOrderPayed);

module.exports = router;
