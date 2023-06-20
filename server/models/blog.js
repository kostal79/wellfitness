const {Schema, model } = require("mongoose")

const BlogSchema = new Schema({
    header: {type: String, required: true},
    promotext: {type: String, required: true},
    text: {type: String, required: true}, 
    created_at: {type: Date, default: Date.now},
    images_refs: [{type: String}],
    use:{type: String, default: "home", enum: ["home, fitnessclub"]}
})

module.exports = new model("Blog", BlogSchema)