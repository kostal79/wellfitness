const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const FeedbackSchema = new Schema({
    userId: {type: ObjectId, ref: "User", require: true},
    tel: {type: String, require: true},
    email: {type: String, require: true},
    message: {type: String, require: true},
    createdAt: {type: Date, defaul: Date.now},
    rating: {type: ObjectId, ref: "Rating"}
})

module.exports = model("Feedback", FeedbackSchema)