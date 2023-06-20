const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const DocSchema = new Schema({
    brand_id: {type: ObjectId, ref: "Brend", required: true},
    type: {type: String, required: true},
    device_id: {type: ObjectId, ref: "Device", require: true},
    file_ref: {type: String, required: true},
})

module.exports = new model("Doc", DocSchema);