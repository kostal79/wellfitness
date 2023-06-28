const { ObjectId } = require("mongodb")
const { Schema, model } = require("mongoose");

const SubtypeSchema = new Schema({
    name: {type: String, required: true},
    devices: {type: [ObjectId], ref: "Device"},
})

module.exports = new model("Subtype", SubtypeSchema)