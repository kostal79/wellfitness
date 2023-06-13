const {Schema, model } = require("mongoose")

const VideoInstructionSchema = new Schema({
    header: {type: String, require: true},
    promotext: {type: String, require: true},
    created_at: {type: Date, default: Date.now},
    video_refs: [{type: String}]
})

module.exports = new model("VideoInstruction", VideoInstructionSchema)