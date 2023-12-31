const { ObjectId } = require("mongodb")
const {Schema, model} = require("mongoose")
const getNextSequenceValue = require("../utils/getNextSequenceMessage")

const MessageSchema = new Schema({
    user_id: {type: ObjectId, ref: "User", required: true},
    number: {type: Number},
    issue: {type: String, require: true},
    text: {type: String, require: true},
    created_at: {type: Date, default: Date.now}
})

MessageSchema.pre("save", async function(next) {
    if (!this.number) {
        this.number = await getNextSequenceValue("messageSequence")
    };
    next();
})

module.exports = model("Message", MessageSchema);
