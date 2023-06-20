const {Schema, model } = require("mongoose")

const VideoInstructionSchema = new Schema({
    header: {type: String, required: true},
    promotext: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    video_refs: [{type: String}]
})

module.exports = new model("VideoInstruction", VideoInstructionSchema)