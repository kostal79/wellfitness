const { ObjectId } = require("mongodb")
const { Schema, model } = require("mongoose");

const TypeSchema = new Schema({
    name: {type: String, required: true},
    group: {type: ObjectId, ref: "Group"},
    usage: {type: String, enum: ["home", "prof"]},
    image_ref: String,
    devices_ids: {type: [ObjectId], ref: "Device"}
})

module.exports = new model("Type", TypeSchema)