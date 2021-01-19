const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: [
        {
            item: { type: String, required: true },
            num: { type: Number, required: true },
        },
    ],
    amount: { type: Number, required: true },
    payed: { type: Boolean, required: true },
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Order", orderSchema);
