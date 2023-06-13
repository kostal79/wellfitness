const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const subBasketShema = new Schema({
    device: {type: ObjectId, ref: "Device"},
    quantity: {type: Number}
})

const BasketSchema = new Schema({
    user_id: {type: ObjectId, ref: "User"},
    devices: [subBasketShema]
})


module.exports = model("Basket", BasketSchema)