const express = require("express");

const groupsController = require("../controllers/groups-controller");
const router = express.Router();

router.get("/", groupsController.getAllGroups);
router.get("/users/:uid", groupsController.getCreateGroupsByUid);

router.post("/", groupsController.createGroup);

module.exports = router;
