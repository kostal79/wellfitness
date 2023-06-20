const {Schema, model } = require("mongoose")

const ShopSchema = new Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    tel: {type: String, required: true},
    working_time: {
        open: String,//example: 10:30
        close: String,
    },
    url: String,
    images_refs: [String],
    status: {type: String, required: true, enum: ["company", "partner", "online"]}
})