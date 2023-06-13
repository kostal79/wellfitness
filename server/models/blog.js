const {Schema, model } = require("mongoose")

const BlogSchema = new Schema({
    header: {type: String, require: true},
    promotext: {type: String, require: true},
    text: {type: String, require: true}, 
    created_at: {type: Date, default: Date.now},
    images_refs: [{type: String}]
})

module.exports = new model("Blog", BlogSchema)