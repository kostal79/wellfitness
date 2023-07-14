const {Schema, model } = require("mongoose")

const BlogSchema = new Schema({
    header: {type: String, required: true},
    text: {
        introduction: String,
        main_body: {
            heading_1: String,
            paragraph_1: String,
            heading_2: String,
            paragraph_2: String,
            heading_3: String,
            paragraph_3: String,
            conclusion: String,
        }
    }, 
    created_at: {type: Date, default: Date.now},
    images_refs: [{type: String}],
    is_blog:{type: Boolean, default: false}
})

module.exports = new model("Blog", BlogSchema)