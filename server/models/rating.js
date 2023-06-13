const { ObjectId } = require("mongodb");
const { Schema, model, } = require("mongoose");

const RatingSchema = new Schema({
    device_id: { type: ObjectId, ref: "Device" , reqire: true},
    user_id: { type: ObjectId, ref: "User", require: true},
    functionality: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 3, 4, 5],
    },
    quality: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 3, 4, 5]
    },


    comfort: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 3, 4, 5]
    },

    price: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 3, 4, 5]
    },
})

RatingSchema.virtual("average").get(function() {
    const average = Math.round((this.functionality + this.quality + this.comfort + this.price) / 4);
    return average
})

module.exports = new model("Rating", RatingSchema)