const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    leader: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    shop: { type: String, required: true },
    status: { type: String, required: true },
    orders: [{ type: mongoose.Types.ObjectId, required: true, ref: "Order" }],
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Group", groupSchema);
