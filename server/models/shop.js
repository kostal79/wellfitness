const {Schema, model } = require("mongoose")

const ShopSchema = new Schema({
    name: {type: String, require: true},
    city: {type: String, require: true},
    addres: {type: String, require: true},
    tel: {type: String, require: true},
    working_time: {
        open: String,//example: 10:30
        close: String,
    },
    url: String,
    images_refs: [String],
    status: {type: String, require: true, enum: ["company", "partner", "online"]}
})