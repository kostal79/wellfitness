const { ObjectId } = require("mongodb")
const { Schema, model } = require("mongoose");

const GroupSchema = new Schema({
    name: { type: String, required: true },
    image_ref: {type: String},
})

module.exports = new model("Group", GroupSchema)