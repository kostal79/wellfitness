const {Schema, model} = require("mongoose")

const MessageSequenceSchema = new Schema({
    _id: {type: String, required: true},
    value: {type: Number, default: 0}
})


module.exports = new model("MessageSequence", MessageSequenceSchema);