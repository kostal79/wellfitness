const {Schema, model } = require("mongoose")

const VideoInstructionSchema = new Schema({
    header: {type: String, required: true},
    promotext: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    video_refs: {type: [String], required: true}
})

module.exports = model("VideoInstruction", VideoInstructionSchema)