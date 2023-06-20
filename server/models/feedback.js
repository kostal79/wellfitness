const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const FeedbackSchema = new Schema({
    device_id: {type: ObjectId, ref: "Device", required: true},
    user_id: {type: ObjectId, ref: "User", required: true},
    tel: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    rating_id: {type: ObjectId, ref: "Rating"}
})

module.exports = model("Feedback", FeedbackSchema);