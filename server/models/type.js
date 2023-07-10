const { ObjectId } = require("mongodb")
const { Schema, model } = require("mongoose");

const TypeSchema = new Schema({
    name: {type: String, required: true},
    subtypes: {type: [ObjectId], ref: "Subtype"},
    usage: {type: String, enum: ["home", "prof"]},
    image_ref: String,
})

module.exports = new model("Type", TypeSchema)