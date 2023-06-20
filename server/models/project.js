const {Schema, model } = require("mongoose")

const ProjectSchema = new Schema({
    header: {type: String, required: true},
    promotext: {type: String, required: true},
    text: {type: String, required: true}, 
    created_at: {type: Date, default: Date.now},
    images_refs: {type: [String]}
})

module.exports = new model("Project", ProjectSchema)