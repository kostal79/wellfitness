const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const DocSchema = new Schema({
    brend: {type: ObjectId, ref: "Brend", require: true},
    type: {type: String, require: true},
    device: {type: ObjectId, ref: "Device", require: true},
    file_ref: {type: String, require: true},
})

module.exports = new model("Doc", DocSchema);