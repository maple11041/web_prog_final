const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    leader: { type: String, required: true },
    shop: { type: String, required: true },
    status: { type: String, required: true },
    users: { type: Array, required: true },
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Group", groupSchema);
